from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from JobListingResources import jobListingApp
from JobListingModels import db
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'  # Use SQLite database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

migrate = Migrate(app,db)

with app.app_context():
    db.create_all()

app.register_blueprint(jobListingApp)

if __name__ == '__main__':
    app.run(debug=True)

