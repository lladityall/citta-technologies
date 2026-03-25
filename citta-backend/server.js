const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer'); // 1. Import Nodemailer
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
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

// 2. Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT, // 465 for SSL
  secure: true, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
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
    console.error('⚠️  Database init error:', err.message);
  }
}

// ── Routes ──────────────────────────────────────────────

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CITTA Technologies API is running' });
});

app.post('/api/contact', async (req, res) => {
  const { fullName, email, company, phone, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  try {
    // A. Save to Database
    const [result] = await pool.execute(
      `INSERT INTO contact_submissions (full_name, email, company, phone, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, email, company || null, phone || null, subject, message]
    );

    // B. Send Email Notification
    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`, // Best practice: send FROM your authenticated email
      replyTo: email, // So you can click 'Reply' in Gmail to reach the user
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New Submission from CITTA Website</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Thank you! Your message has been received and emailed.',
      id: result.insertId,
    });
  } catch (err) {
    console.error('Error processing contact form:', err.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    res.json({ count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, async () => {
  console.log(`🚀 CITTA Technologies API running on http://localhost:${PORT}`);
  await initDB();
});