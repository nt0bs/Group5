# Welcome to the Group5 Job Listing App

The app conprises of two major folders the 'frontend' and 'backend'.The is the frontend for the Job Listing Application, built using React. It interacts with the Flask backend API to display, add, update, and delete job listings. The is the backend for the Job Listing Application, built with Flask and SQLAlchemy. It provides the API to manage job listings and serves data to the frontend.

# Frontend 'README.md'

```markdown
# Job Listing App Frontend

This is the frontend for the Job Listing Application, built using React. It interacts with the Flask backend API to display, add, update, and delete job listings.

# Contributors

Cynthia Mokasi - Frontend , Home page, and UI/UX, basic styling
Modisa Ntobeng - React set-up, Source Control (Git) and project structure and maintainance, Add job page
Khanyisile Buthelezi - Addjob page
Primrose Dube - Navbar page
Lethukuthula Mkhonto - Job Listing and Styling Page

## Features

- Responsive design for managing job listings.
- Axios for making API requests to the backend.
- React Router for navigation between pages.
- Dynamic form validation for adding and editing jobs.

## Requirements

Make sure you have the following installed:

- Node.js (v14 or above)
- npm (Node package manager)

## Getting Started

### 1. Clone the Repository
If you have cloned the Group5 repository, the frontend folder is part of the repository just call it in your terminal:
```bash
cd Group5/frontend
```
If you have not cloned the Group5 repository, use commard below:

```bash
git clone https://github.com/nt0bs/Group5.git
```
then access the frontend using: 

```bash
cd Group5/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API URL
```javascript
const response = await axios.get('https://group5-1wvm.onrender.com/api/jobs');
```

### 4. Run the Frontend

```bash
npm start
```

#### 1. Key Notes:
- *** One Repo:** The backend and the frontend are in their repective folders, each with their `README.md` describing  the relevant setup and instructions for the frontend or backend.
- **API URLs:** For the frontend, the API URLs  point to the correct deployed backend URL.

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


