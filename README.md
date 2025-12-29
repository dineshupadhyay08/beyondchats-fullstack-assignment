# BeyondChats – Full Stack Assignment

This project is developed as part of the BeyondChats Full Stack Internship Assignment.
The goal of the assignment is to demonstrate backend API development, database handling,
basic frontend integration, and an understanding of AI-based content enhancement.

---

## 🚀 Project Overview

The project consists of three major phases:

### Phase 1: Backend & Database
- Identified 5 old (real) BeyondChats blog articles.
- Stored these articles in MongoDB.
- Implemented complete CRUD APIs using Node.js and Express.

### Phase 2: AI / LLM (Proof of Concept)
- Demonstrated how an article can be enhanced using an LLM.
- The AI-generated content is stored as an updated version of the original article.
- External reference articles (from Google search) are cited for transparency.
- This phase is implemented as a proof of concept due to its complexity.

### Phase 3: Frontend
- Built a simple and clean React frontend using Vite.
- Articles are fetched using backend GET APIs.
- Each article includes a clickable hyperlink to the original BeyondChats blog.
- Focused on readability and a clean UI rather than complex design.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- React (Vite)
- CSS (Simple custom styling)

### Tools & Utilities
- Git & GitHub
- Postman / Thunder Client (API testing)

---

## 📂 Project Structure

beyondchats-fullstack-assignment/
├── backend/
│ ├── app.js
│ ├── db.js
│ ├── models/
│ ├── routes/
│ └── scraper/ (proof of concept)
├── frontend/
│ ├── src/
│ ├── index.html
│ └── vite.config.js
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Local Setup Instructions

### Backend Setup
1. Navigate to the backend folder:
cd backend

markdown
Copy code
2. Install dependencies:
npm install

markdown
Copy code
3. Create a `.env` file:
PORT=5001
MONGO_URL=your_mongodb_connection_string

markdown
Copy code
4. Start the backend server:
npm run dev

yaml
Copy code

---

### Frontend Setup
1. Navigate to the frontend folder:
cd frontend

markdown
Copy code
2. Install dependencies:
npm install

markdown
Copy code
3. Start the frontend:
npm run dev

nginx
Copy code

The frontend will run on:
http://localhost:5173

yaml
Copy code

---

## 🔄 Data Flow / Architecture

1. Articles are stored in MongoDB.
2. Backend exposes REST APIs (GET, POST, PUT, DELETE).
3. Frontend calls the GET API to fetch articles.
4. Articles are displayed in a clean card-based UI.
5. Clicking “Read original article” redirects to the real BeyondChats blog page.
6. For Phase 2, an LLM updates one article and stores the enhanced version via CRUD APIs.

---

## 🌐 Live Link

Frontend Live URL:
(Deploy on Vercel / Netlify and paste the link here)

yaml
Copy code

---

## 🎨 UI/UX Notes

- Clean and readable layout.
- Card-based article presentation.
- Mobile-friendly and responsive.
- Focus on simplicity and clarity.

---

## 🧠 AI / LLM Explanation (Phase 2)

- One article is enhanced using an LLM as a proof of concept.
- The original BeyondChats article remains the source.
- Two external reference articles are used to guide content improvement.
- References are stored alongside the updated article for transparency.

---

## ✅ Evaluation Criteria Coverage

- **Completeness:** Backend + Frontend implemented.
- **ReadMe & Setup Docs:** Detailed instructions provided.
- **UI/UX:** Clean, simple, and readable interface.
- **Live Link:** Frontend deployment supported.
- **Code Quality:** Clear structure and readable code.

---

## 📌 Notes

- Frontend uses only GET APIs to display content.
- All CRUD operations are implemented and tested at the backend level.
- Images and edit/delete buttons are intentionally omitted to keep the UI simple.

---

## 👤 Author

**Dinesh Upadhyay**  
Full Stack Developer (MERN)
