# 📝 TodoApp

TodoApp is a full-stack task management application that allows users to register, log in, and manage their daily tasks efficiently. It supports full CRUD operations with authentication and elegant user interactions via SweetAlert2.

## 🚀 Features

- User registration and login using JWT
- Secure password hashing using bcrypt
- Add, update, and delete todos
- Global state management with Context API
- SweetAlert2 for user-friendly popups and alerts
- Responsive design using Tailwind CSS or Bootstrap

## 🛠 Tech Stack

### Frontend
- React
- React Router
- Context API
- Axios
- SweetAlert2
- Tailwind CSS / Bootstrap

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## 📁 Project Structure

/client # React frontend /server # Express backend

bash
Copy
Edit

## 🔧 Initial Setup

### Clone the repository

```bash
git clone https://github.com/your-username/todoapp.git
cd todoapp
Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file in the server directory:

env
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key
Start the backend server:

bash
Copy
Edit
npm run dev
Frontend Setup
Open a new terminal window:

bash
Copy
Edit
cd client
npm install
npm start
The frontend will run on: http://localhost:3000