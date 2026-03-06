Django React E-Commerce

A full-stack E-Commerce web application built using Django (backend) and React (frontend).
The platform allows users to browse products, manage a shopping cart, and place orders through a modern web interface.

This project demonstrates full-stack development, REST API design, frontend-backend integration, and scalable application architecture.

Project Overview

This application follows a decoupled architecture:

Django handles backend logic, database models, authentication, and APIs.

React manages the frontend UI and communicates with Django via API calls.

The system provides a complete e-commerce workflow including product browsing, cart management, and checkout functionality.

Tech Stack
Backend

Python

Django

Django REST Framework

SQLite (default database)

Frontend

React.js

JavaScript

HTML5

CSS3

Tools & Development

Node.js

npm

Git

Virtualenv

Key Features
User Features

User registration and authentication

Product listing and browsing

Add products to cart

Remove products from cart

Update cart quantity

Checkout functionality

Product Management

Product catalog

Product detail view

Dynamic product loading via API

Cart System

Add to cart

Remove from cart

Order summary

Cart persistence

Backend API

RESTful API endpoints

Django models for products and orders

API communication between Django and React

System Architecture
React Frontend
      |
      | API Requests
      v
Django REST API
      |
      v
Database (SQLite)

The React frontend interacts with the Django backend through REST APIs to fetch and update application data.

Project Structure
django-react-ecommerce
│
├── core/                 # Main Django application
├── home/                 # Django app for homepage/views
├── public/               # Public assets for frontend
├── src/                  # React frontend source code
│
├── manage.py             # Django management script
├── db.sqlite3            # SQLite database
├── package.json          # Node dependencies
├── requirements.txt      # Python dependencies
└── .env                  # Environment variables
Backend Setup (Django)
1 Clone the repository
git clone https://github.com/mirz7/django-react-ecommerce.git
cd django-react-ecommerce
2 Create virtual environment
python -m venv env
3 Activate environment

Windows

env\Scripts\activate

Mac/Linux

source env/bin/activate
4 Install dependencies
pip install -r requirements.txt
5 Run migrations
python manage.py migrate
6 Run backend server
python manage.py runserver

Backend will run at

http://127.0.0.1:8000
Frontend Setup (React)
Install dependencies
npm install
Start development server
npm start

React application will run at

http://localhost:3000
Production Build

To build the React application for production:

npm run build

The compiled frontend files will be generated inside the build folder.

Advanced Concepts Used

This project demonstrates several advanced development concepts:

Full-stack application architecture

Django + React integration

REST API development

Component-based UI development

State management in React

Backend-driven frontend architecture

Environment configuration with .env

Possible Improvements

Future enhancements could include:

Payment gateway integration

Product reviews and ratings

Order tracking system

Admin dashboard

JWT authentication

Docker deployment

Cloud hosting (AWS / Vercel)

Learning Outcomes

Through this project the following skills were developed:

Full-stack web development

Django backend architecture

React frontend development

API integration

E-commerce workflow implementation

Author

Muhammed Mirza

Computer Science Graduate
Cloud & Backend Development Enthusiast

GitHub
https://github.com/mirz7
