from flask import Blueprint, jsonify, request, abort
from JobListingModels import db, Job

jobListingApp = Blueprint('jobListingApp', __name__)

@jobListingApp.route('/')
def home():
    return jsonify({"message": "Welcome to the Job Listing API"})

#Retrieve all the jobs
@jobListingApp.route('/api/jobs', methods=['GET'])
def get_jobs():
    jobs = Job.query.all()  # Query the Job model for all jobs
    return jsonify([job.to_dict() for job in jobs])

#Retrieve a job by ID
@jobListingApp.route('/api/jobs/<int:job_id>', methods=['GET'])
def get_job(job_id):
    job = Job.query.get(job_id)
    if job is None:
        abort(404)
    return jsonify(job.to_dict())

#Create a job
@jobListingApp.route('/api/jobs', methods=['POST'])
def create_job():
    try:
        data = request.get_json()
        new_job = Job(
            title=data['title'],
            location=data['location'],
            category=data['category'],
            description=data['description']
        )
        db.session.add(new_job)
        db.session.commit()
        return jsonify({'message': 'Job added successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

#Update the Job    
@jobListingApp.route('/api/jobs/<int:job_id>', methods=['PUT'])
def update_job(job_id):
    job = Job.query.get(job_id)
    if job is None:
        abort(404)

    data = request.get_json()

    # Update fields with provided data
    job.title = data.get('title', job.title)
    job.description = data.get('description', job.description)
    job.location = data.get('location', job.location)
    job.category = data.get('category', job.category)

    # Commit the changes to the database
    db.session.commit()
    return jsonify(job.to_dict())

#Delete a job
@jobListingApp.route('/api/jobs/<int:job_id>', methods=['DELETE'])
def delete_job(job_id):
    job = Job.query.get(job_id)
    if job is None:
        abort(404)
    
    db.session.delete(job)
    db.session.commit()
    return '', 204