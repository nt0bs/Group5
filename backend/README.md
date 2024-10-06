## Get up and running

### Step 1: navigate to backend folder and the create your virtual environment

```
    cd backend
    python -m venv venv
```

### Step 2: Activate your virtual environment

```
    venv\Scripts\activate
```

### Step 3: Install flask and SQL Alchemy

```
    pip install flask sqlalchemy flask-cors
```

### Step 4: Create an app.py file where your code will live

```
    from flask import Flask, request, jsonify
    from flask_sqlalchemy import SQLAlchemy

    # Initialize the Flask app
    app = Flask(__name__)

    # Configuring the SQLite database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the SQLAlchemy ORM
    db = SQLAlchemy(app)

    # Define the Job model
    class Job(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String(100), nullable=False)
        description = db.Column(db.String(200), nullable=False)

        def to_dict(self):
            return {"id": self.id, "title": self.title, "description": self.description}

    # Endpoint to get all jobs
    @app.route('/jobs', methods=['GET'])
    def get_jobs():
        jobs = Job.query.all()
        return jsonify([job.to_dict() for job in jobs])

    # Endpoint to add a job
    @app.route('/add_job', methods=['POST'])
    def add_job():
        data = request.json
        title = data.get('title')
        description = data.get('description')

        if not title or not description:
            return jsonify({"error": "Title and description are required"}), 400

        new_job = Job(title=title, description=description)
        db.session.add(new_job)
        db.session.commit()

        return jsonify({"message": "Job added successfully", "job": new_job.to_dict()}), 201

    # Initialize the database and create the tables
    @app.before_first_request
    def create_tables():
        db.create_all()

    # Run the Flask app
    if __name__ == '__main__':
        app.run(debug=True)
```

### Step 5: Running the App

```
    python app.py
```

### Step 6: Incase of an import error

1. select `CTRL + SHIFT + P`
2. Then type `Python: Select Intepreter`
3. Select Enter Intepreter Path
4. Select Find
5. navigate into `venv -> Scripts -> python.exe`
