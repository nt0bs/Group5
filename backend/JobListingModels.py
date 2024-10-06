from flask_sqlalchemy import SQLAlchemy
# Initialize the database
db = SQLAlchemy()

# Define a Job model
class Job(db.Model):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)  # Primary key
    title = db.Column(db.String(100), nullable=False)  # Job title
    description = db.Column(db.String(255), nullable = True)  # Job description
    location = db.Column(db.String(100), nullable=True)
    category = db.Column(db.String(50), nullable=True)

    def to_dict(self):
        return { 
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'location': self.location,
            'category': self.category
            }