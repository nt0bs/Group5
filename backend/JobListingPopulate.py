import requests

jobs_data = [
    {
        "title": "Software Engineer",
        "location": "New York, NY",
        "category": "Engineering",
        "description": "Develop and maintain web applications, collaborate with cross-functional teams, and deliver high-quality software solutions."
    },
    {
        "title": "Marketing Manager",
        "location": "San Francisco, CA",
        "category": "Marketing",
        "description": "Lead the marketing team, create and implement strategies to increase brand awareness, and drive product engagement."
    },
    {
        "title": "Data Analyst",
        "location": "Austin, TX",
        "category": "Data Science",
        "description": "Analyze large datasets to extract insights, create dashboards, and support decision-making across the organization."
    },
    {
        "title": "Product Manager",
        "location": "Seattle, WA",
        "category": "Product",
        "description": "Define product roadmaps, collaborate with engineering teams, and ensure successful product launches."
    },
    {
        "title": "UX/UI Designer",
        "location": "Remote",
        "category": "Design",
        "description": "Design user-centric interfaces, work closely with product managers and developers to enhance the user experience."
    },
    {
        "title": "Human Resources Specialist",
        "location": "Boston, MA",
        "category": "HR",
        "description": "Handle employee relations, recruitment, and ensure compliance with labor regulations."
    },
    {
        "title": "Sales Executive",
        "location": "Los Angeles, CA",
        "category": "Sales",
        "description": "Build and maintain client relationships, achieve sales targets, and explore new business opportunities."
    },
    {
        "title": "Financial Analyst",
        "location": "Chicago, IL",
        "category": "Finance",
        "description": "Perform financial forecasting, reporting, and track key metrics to ensure financial stability."
    },
    {
        "title": "Customer Support Specialist",
        "location": "Phoenix, AZ",
        "category": "Customer Service",
        "description": "Provide support to customers via phone, email, and chat, and resolve product-related queries efficiently."
    },
    {
        "title": "DevOps Engineer",
        "location": "Miami, FL",
        "category": "Engineering",
        "description": "Implement and maintain CI/CD pipelines, manage cloud infrastructure, and ensure high availability of applications."
    }
]

# Replace with your actual API endpoint for creating jobs
api_endpoint = "http://127.0.0.1:5000/api/jobs"

for job in jobs_data:
    response = requests.post(api_endpoint, json=job)
    if response.status_code == 201:
        print(f"Successfully created job: {job['title']}")
    else:
        print(f"Failed to create job: {job['title']}. Status Code: {response.status_code}, Response: {response.text}")