# test_models.py

import unittest
from app import create_app, db
from models import Job
from config import TestConfig

class JobModelTestCase(unittest.TestCase):
    def setUp(self):
        """Set up the test environment."""
        self.app = create_app(TestConfig)  # Use the TestConfig
        self.app_context = self.app.app_context()  # Create app context
        self.app_context.push()  # Push context so it can be used by the app
        db.create_all()  # Create tables in the in-memory database

    def tearDown(self):
        """Clean up after each test."""
        db.session.remove()  # Remove session to avoid conflicts
        db.drop_all()  # Drop all tables after the test
        self.app_context.pop()  # Pop the app context to clean up

    def test_create_job(self):
        """Test that a job can be created."""
        job = Job(title="Software Engineer", description="Develop software", company="Tech Corp", location="Remote", salary=60000)
        db.session.add(job)
        db.session.commit()

        self.assertEqual(Job.query.count(), 1)  # Verify that 1 job was added
        self.assertEqual(Job.query.first().title, "Software Engineer")  # Check the job title is correct

if __name__ == '__main__':
    unittest.main()