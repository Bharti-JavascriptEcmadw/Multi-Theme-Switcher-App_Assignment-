# 📋 MERN Task Manager App

A full-stack Task Manager application built using **MongoDB**, **Express**, **React**, and **Node.js**. Users can register, log in, and manage their tasks securely with JWT authentication.

---

## 📁 Project Structure

```
project-root/
├── client/       # React frontend
└── server/       # Express backend with MongoDB
```

---

## ✨ Features

- ✅ User Registration & Login
- 🔐 Authentication using JWT (stored in cookies)
- 📝 Create, Read, Update, Delete (CRUD) Tasks
- 📦 MongoDB Atlas Integration
- 🧑‍💼 Protected Routes with React Router
- 🎨 Clean and responsive UI with Tailwind CSS

---

## ⚙️ Technologies Used

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (Authentication)
- Cookie-Parser
- CORS

### 🎨 Frontend:
- React.js
- Tailwind CSS
- Axios
- React Router DOM

---

## 🚀 Getting Started

### 🔹 Prerequisites

- Node.js installed
- MongoDB Atlas account

---

## 🔧 Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file inside `server/` and add:

```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm run dev
```

Your server should run on [http://localhost:4000](http://localhost:4000)

---

## 🎨 Frontend Setup

1. Navigate to the client directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

Your app will run on [http://localhost:3000](http://localhost:3000)

✅ Make sure you add this to `client/package.json` to allow proxying requests to backend:

```json
"proxy": "http://localhost:4000"
```

---

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | /api/register      | Register new user       |
| POST   | /api/login         | Login existing user     |
| GET    | /api/logout        | Logout and clear cookie |

### 📝 Task Routes (Protected)

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/get           | Get all tasks           |
| POST   | /api/post          | Create new task         |
| PUT    | /api/:id           | Update task by ID       |
| DELETE | /api/:id           | Delete task by ID       |

---

## 🔐 Authentication Flow

- On login/register, the backend sends a `jwt` cookie (httpOnly).
- All protected requests from frontend use `withCredentials: true`.
- Server validates JWT from cookie on protected routes.

---

## 🖥 Screenshots

_(Optional) Add screenshots here if needed._

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

Developed by **Bharti Dwivedi**

---

## 📬 Contact

For feedback or issues, feel free to contact via GitHub or email.