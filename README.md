# CITTA Technologies — Official Website

A full-stack company website built with **React + Vite** (frontend) and **Node.js + Express** (backend), connected to **MySQL**.

---

## 📁 Project Structure

```
citta-technologies/   ← React Vite frontend
citta-backend/        ← Node.js Express backend
```

---

## 🚀 Frontend Setup (React + Vite)

```bash
cd citta-technologies
npm install
npm run dev
```

Runs at: **http://localhost:5173**

### Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services (Software, App, Web, E-Commerce, Cloud, Cyber) |
| `/industries` | Industries |
| `/about` | About |
| `/insights` | Insights / Blog |
| `/careers` | Careers |
| `/contact` | Contact Us |

---

## 🖥️ Backend Setup (Node.js + MySQL)

### 1. Set up MySQL database

```sql
CREATE DATABASE citta_db;
```

Or run the provided `database.sql` file:

```bash
mysql -u root -p < database.sql
```

### 2. Configure environment

```bash
cd citta-backend
cp .env.example .env
# Edit .env with your MySQL credentials
```

### 3. Install & start

```bash
npm install
npm run dev     # development (with nodemon)
npm start       # production
```

Runs at: **http://localhost:5000**

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all submissions (admin) |

### Contact Form Payload (POST `/api/contact`)

```json
{
  "fullName": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "phone": "+91 900 000 0000",
  "subject": "Project inquiry",
  "message": "Hello, I'd like to discuss..."
}
```

---

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| Styling | Custom CSS (no framework) |
| Icons | Lucide React |
| Fonts | Syne (display) + DM Sans (body) |
| Backend | Node.js, Express |
| Database | MySQL (via mysql2) |

---

## 🏗️ Build for Production

```bash
# Frontend
cd citta-technologies
npm run build
# Output in dist/ folder

# Backend — just run with PM2 or similar
cd citta-backend
npm start
```
