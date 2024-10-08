# Job Listing App Backend

This is the backend for the Job Listing Application, built with Flask and SQLAlchemy. It provides the API to manage job listings and serves data to the frontend.

# Contributors

Cynthia Mokasi - Backend API endpoints
Modisa Ntobeng - Source Control (Git) structure and maintainance
Khanyisile Buthelezi - Backend Structure, API endpoints, App deployment (Render), Testing, and README.md

## Features

- RESTful API to manage job listings (CRUD operations).
- SQLite database integration via SQLAlchemy.
- Flask-Migrate for database migrations.
- CORS support for frontend-backend communication.

## Requirements

Make sure you have the following installed:

- Python 3.8+
- `pip` (Python package manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nt0bs/Group5.git
cd Group5/backend
```

### 2. Set up Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Set Up Database

```bash
flask db init
flask db migrate
flask db upgrade
```

### 5. Run Server

```bash
python JobListingApp.py
```

### 6. API Endpoints

```bash
GET: /api/jobs # Retrieve all jobs.
POST: /api/jobs # Add a new job.
GET: /api/jobs/:id # Retrieve a specific job by ID.
PUT: /api/jobs/:id  # Update a specific job.
DELETE: /api/jobs/:id # Delete a specific job.


