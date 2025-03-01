# Edunet-Backend

A full-stack web application featuring user authentication built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Overview

This project implements a complete authentication system with user registration and login functionality. It demonstrates the integration of a React frontend with a Node.js/Express backend and MongoDB database.

## Features

### Backend Features

- *User Authentication*
  - Registration endpoint (/register) for creating new user accounts
  - Login endpoint (/login) for authenticating existing users
  - Password hashing using bcrypt for security

- *Database Integration*
  - MongoDB integration using Mongoose
  - User schema with username, email, and password fields

- *API Security*
  - CORS enabled for cross-origin requests
  - Environment variables for sensitive information (MongoDB URI)

### Frontend Features

- *Authentication Pages*
  - Login page with email and password fields
  - Registration page with username, email, and password fields
  - Error handling for failed authentication attempts

- *Home Page*
  - Protected route (redirects to login if not authenticated)
  - Personalized welcome message showing the logged-in username
  - Dashboard button (functionality to be implemented)

- *Navigation*
  - React Router for page navigation
  - Redirect to home after successful login/registration
  - Redirect to login if attempting to access protected routes when not authenticated

- *State Management*
  - Local state for form inputs and error messages
  - User session managed through localStorage
  - Authentication state lifting (via props)

## Technical Implementation

- User credentials stored in MongoDB with passwords hashed using bcrypt
- Frontend communicates with backend via Axios for API requests
- User sessions maintained using localStorage
- Split-screen UI design for authentication pages

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn


### Running the Application

1. Start the backend server
   
   npm run server
   

2. Start the frontend development server
   
   cd client
   npm start
   



## Future Enhancements

- Password reset functionality
- Email verification
- JWT authentication
- Profile management
- Role-based access control
- Enhanced security measures
