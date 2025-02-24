# SOR-Enterpricess
# 🚀 SOR Enterprises

SOR Enterprises is a **full-stack MERN (MongoDB, Express, React, Node.js) application** for managing different vehicle categories like **Bikes, Cars, and Cycles**. It includes backend APIs for handling data and a frontend interface for users to interact with the system.

---

## 📌 Features

- 🏎️ **Vehicle Listings**: Manage Bikes, Cars, and Cycles.
- ⚙️ **MERN Stack**: MongoDB (Database), Express.js (Backend), React (Frontend), and Node.js (Server).
- 🔌 **REST API**: Backend handles CRUD operations for vehicles.
- 🎨 **React UI**: Frontend built with React.js.
- 🔄 **State Management**: Uses React State and Hooks.
- 🔥 **Fast & Responsive**: Designed for a smooth user experience.

---

## 🛠️ Technologies Used

### **Frontend (React)**
- React.js
- React Router
- CSS for styling

### **Backend (Node.js & Express)**
- Express.js
- Mongoose (MongoDB ODM)
- CORS
- Body-parser

### **Database**
- MongoDB (Mongoose models: `bikesModel.js`, `carsModel.js`, `cyclesModel.js`)

---

## 📁 Project Structure
📦 SOR-Enterprises ├── 📂 backend │ ├── 📂 connection │ │ ├── conn.js # MongoDB connection setup │ ├── 📂 models │ │ ├── bikesModel.js │ │ ├── carsModel.js │ │ ├── cyclesModel.js │ ├── 📂 routes │ ├── app.js # Main backend server file │ ├── package.json # Backend dependencies │ ├── package-lock.json │ ├── 📂 frontend │ ├── 📂 public │ ├── 📂 src │ │ ├── 📂 components │ │ ├── 📂 pages │ │ ├── App.js │ │ ├── index.js │ ├── package.json # Frontend dependencies │ ├── package-lock.json │ ├── .gitignore │ ├── README.md # Project documentation


## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Mojukumar/SOR-Enterpricess.git
cd SOR-Enterpricess

2️⃣ Backend Setup
cd backend
npm install

Configure MongoDB Connection in conn.js
Start the backend server:

node app.js

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🚀 Usage
Start the Backend: node app.js
Start the Frontend: npm start
Open http://localhost:3000/ in your browser.

🛠️ API Endpoints (Backend)
Method	Endpoint	Description
GET	/bikes	Get all bikes
POST	/bikes	Add a new bike
GET	/cars	Get all cars
POST	/cars	Add a new car
GET	/cycles	Get all cycles
POST	/cycles	Add a new cycle

🎯 Future Enhancements
🛑 Authentication (JWT-based user login)
📊 Admin Panel for vehicle management
🚀 Deployment on Cloud (Heroku/Vercel)


👨‍💻 Author
Mojukumar B L
📧 mojukumar2002@gmail.com
