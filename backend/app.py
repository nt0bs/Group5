from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from datetime import datetime

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    company_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    employment_type = db.Column(db.String(50), nullable=False)
    salary_range = db.Column(db.String(50), nullable=True)
    expiration_date = db.Column(db.DateTime, nullable=False)
    posted_date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Job('{self.title}', '{self.company_name}')"

@app.route('/')
def home():
    return "Welcome to the Job Listing Platform!"

if __name__ == "__main__":
    app.run(debug=True)