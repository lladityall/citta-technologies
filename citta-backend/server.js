const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || 'Aditya@136',
  database: process.env.DB_NAME     || 'citta_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Initialize database table
async function initDB() {
  try {
    const conn = await pool.getConnection();
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id          INT AUTO_INCREMENT PRIMARY KEY,
        full_name   VARCHAR(150) NOT NULL,
        email       VARCHAR(200) NOT NULL,
        company     VARCHAR(150),
        phone       VARCHAR(50),
        subject     VARCHAR(255) NOT NULL,
        message     TEXT NOT NULL,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    conn.release();
    console.log('✅ Database initialized successfully');
  } catch (err) {
    console.error('⚠️  Database init error (running without DB):', err.message);
  }
}

// ── Routes ──────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CITTA Technologies API is running' });
});

// POST /api/contact — Save contact form submission
app.post('/api/contact', async (req, res) => {
  const { fullName, email, company, phone, subject, message } = req.body;

  // Basic validation
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO contact_submissions (full_name, email, company, phone, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, email, company || null, phone || null, subject, message]
    );

    res.status(201).json({
      message: 'Thank you! Your message has been received.',
      id: result.insertId,
    });
  } catch (err) {
    console.error('DB insert error:', err.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/contact — Retrieve all submissions (admin)
app.get('/api/contact', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC'
    );
    res.json({ count: rows.length, data: rows });
  } catch (err) {
    console.error('DB fetch error:', err.message);
    res.status(500).json({ message: 'Server error.' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 CITTA Technologies API running on http://localhost:${PORT}`);
  await initDB();
});
