# 📚 Book Management RESTful API

This is a secure Node.js + Express.js RESTful API for managing books, with MongoDB Atlas as the database, and JWT authentication.

---

### 🛠 Tech Stack

- Node.js

-Express.js

- MongoDB Atlas

- Mongoose ODM

- JWT Authentication

- bcryptjs

- dotenv

- cors

---

## ✨ Features

- User Registration & Login with JWT
- Authentication and Authorization
- CRUD Operations for Books (Create, Read, Update, Delete)
- MongoDB Atlas Database Integration
- Pagination Support
- Error Handling (400, 401, 404, 500)
- Basic API Testing with Mocha, Chai
- Project Structure: MVC pattern(Model, Controller, Routes)

---

## 📁 Project 
book-api/ 
 ├── controllers/ 
 │ ├── authController.js 
 │ └── bookController.js 
 ├── middleware/ 
 │ └── authMiddleware.js 
 ├── models/ 
 │ ├── userModel.js 
 │ └── bookModel.js 
 ├── routes/ 
 │ ├── authRoutes.js 
 │ └── bookRoutes.js 
 ├── tests/ 
 │ └── book.test.js (optional) 
 ├── server.js 
 ├── .env 
 ├── package.json 
 ├── README.md


---

## 🚀 Setup Instructions

### 1. Clone the repository
git clone https://github.com/your-username/book-api.git
Install dependencies

### 2. Install dependencies
npm install

### 3. Create .env file based on .env.example
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here
JWT_SECRET=your_jwt_secret_key_here

- "After cloning the repository, create a .env file based on .env.example and filled MongoDB URI and JWT Secret."

### 4. Start the development server
npm run dev

# Server will run at http://localhost:5000

---

### 🔑 API Endpoints

## 🧑 Authentication
POST /auth/register — Register a new user

POST /auth/login — Login and receive JWT Token

### 📚 Book Management (Requires Authentication)
GET /api/books — List all books (with pagination)

GET /api/books/:id — Get a single book by ID

POST /api/books — Create a new book

PUT /api/books/:id — Update a book

DELETE /api/books/:id — Delete a book

---

## 📬  curl Commands for Quick Testing

# Register a user
curl -X POST http://localhost:5000/auth/register -H "Content-Type: application/json" -d '{"username":"john_doe","email":"john@example.com","password":"password123"}'

# Login and get JWT Token
curl -X POST http://localhost:5000/auth/login -H "Content-Type: application/json" -d '{"username":"john_doe","password":"password123"}'

# Create a book (replace YOUR_TOKEN_HERE)
curl -X POST http://localhost:5000/api/books -H "Authorization: Bearer YOUR_TOKEN_HERE" -H "Content-Type: application/json" -d '{"title":"The Hobbit","author":"J.R.R. Tolkien","publishedDate":"1937-09-21","genre":"Fantasy"}'

---

## 📥 Postman Collection 

# The collection will contain:

POST /auth/register

POST /auth/login

POST /api/books (Create Book)

GET /api/books (List all Books)

GET /api/books/:id (Get book by ID)

PUT /api/books/:id (Update Book)

DELETE /api/books/:id (Delete Book)

## ✅ Token will be auto-attached after login using Postman scripting.