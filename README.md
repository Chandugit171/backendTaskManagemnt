### Node.js Task Management API

This is a Node.js, Express, and MongoDB-based API for task management that provides authentication via JWT.

Tech Stack

Node.js

Express.js

MongoDB with Mongoose

bcrypt.js for password hashing

jsonwebtoken for authentication

CORS & Express JSON Middleware for request handling

Features

✅ User Registration and Login (JWT Authentication)✅ CRUD operations for managing tasks✅ Protected routes for secure data access

### Installation

Clone the repository

git clone `https://github.com/Chandugit171/backendTaskManagemnt.git`
cd taskmanagemnt-backend

Install dependencies

`yarn install`

Create .env file

PORT=3000
MONGO_URI=`mongodb+srv://chandudb:chandudb@hrms.nemgz.mongodb.net/?retryWrites=true&w=majority&appName=hrms`
JWT_SECRET=`7b7c65f66381bead955aff82902afce4c865cb661181960b82425dec31936922`

Start the server
`yarn dev`


### postman collection 
`https://drive.google.com/file/d/1w3DOJs3WKHQNUb7VpDmb9hb6cX7hX0BD/view?usp=sharing`