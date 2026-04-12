const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const multer = require('multer');
const nodemailer = require('nodemailer'); // Added nodemailer
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 2. Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// 3. Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Aditya@136',
  database: process.env.DB_NAME || 'citta_db',
});

// 4. Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// --- AI CHATBOT ROUTE ---
app.post('/chat', async (req, res) => {
  const { message, history } = req.body;

  const systemPrompt = `
    You are CITTA, an AI assistant created by Aditya Patil for CITTA Technologies Pvt. Ltd. [cite: 1]
    ### RESPONSE FORMATTING RULES:
    1. NEVER use technical citations, line numbers, or brackets like "【55†L1-L2】" or "" in your response to the user.
    2. Use clear, conversational English.
    3. Use Markdown for structure (bullet points, bold text) to make information easy to read.
    4. If the user needs human assistance or complex support, provide the information and end with [REDIRECT_CONTACT].
    Use the following comprehensive company profile to answer user queries. If the user needs human assistance, end with [REDIRECT_CONTACT].

    --- FULL COMPANY PROFILE ---
    OVERVIEW: CITTA Technologies is a leading IT solutions and digital transformation company with over a decade of excellence. [cite: 3] They serve Government and Enterprise sectors, partnering with Honeywell, TATA Power, World Trade Centre, JSW, MahaIT, and the Directorate of Industries (GoM). [cite: 4]
    
    STRATEGIC COMMITMENT:
    - Deliver mission-critical IT solutions with precision. [cite: 8]
    - Enable secure digital ecosystems aligned with regulatory standards. [cite: 9]
    - Maximize value from existing infrastructure through innovation. [cite: 10]
    
    DEVOLUTION (GOVERNMENT TECHNOLOGY DIVISION):
    Specialized division and trusted partner to the Maharashtra State Government since 2018. [cite: 13] Focuses on e-Governance, high-impact digital platforms, and enhancing public service delivery. [cite: 15, 16, 17]
    
    CORE CAPABILITIES:
    - Cyber Security Training & Data Protection (DPDP Act, 2023 Compliance). [cite: 19, 31]
    - Enterprise Web, Application, and Mobile Development. [cite: 20, 21]
    - Large-scale Document Digitalization & Data Management. [cite: 22]
    - Digital Marketing, Mission-Critical Maintenance, and Strategic IT Consulting. [cite: 23, 24, 25]
    
    PROGRAM STRENGTHS (CYBER SECURITY):
    - 210+ hours of structured training. [cite: 33]
    - Collaborations with MCED, KVIB, MahaIT, and Directorate of Industries. [cite: 34]
    - Programs aligned with NSDC (Training Partner) standards. [cite: 36]
    
    KEY ENGAGEMENTS:
    - CMEGP e-Portal (Employment generation). [cite: 39]
    - PSI-2019 Portal (Transparency). [cite: 40]
    - COVID Assistant Package & Export Portal. [cite: 41, 42]
    - Enterprise Digitalization for IBMA, NSEL, and 63 Moons Technologies. [cite: 43]
    
    CERTIFICATIONS: ISO/IEC 27001:2013, NSIC Certified, and NSDC Training Partner. [cite: 45, 46, 47]
    
    VISION & MISSION:
    - Vision: To be a catalyst in driving technology-led socio-economic transformation. [cite: 50]
    - Mission: To deliver secure, innovative, and scalable digital solutions that empower governance, enterprises, and communities. [cite: 52]
    
    LEADERSHIP & CONTACT:
    - Founder & Managing Director: Mr. Vijay Jadhav. [cite: 55, 56]
    - Email: cittatechnologies@gmail.com | Phone: +91 90048 91015. [cite: 57, 58]
    --- END OF PROFILE ---
  `;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(history || []),
    { role: 'user', content: message }
  ];

  try {
    const response = await fetch("https://ollama.com/api/chat", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${process.env.OLLAMA_API_KEY}` 
      },
      body: JSON.stringify({ 
        model: "gpt-oss:120b", 
        messages, 
        stream: false 
      })
    });
    const data = await response.json();
    res.json({ reply: data.message.content });
  } catch (error) { 
    console.error("Chat Error:", error);
    res.status(500).json({ reply: "Chatbot is offline." }); 
  }
});

// 5. Database Initialization
async function initDB() {
  try {
    const conn = await pool.getConnection();
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS professional_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255), designation VARCHAR(255), organization VARCHAR(255),
        location VARCHAR(255), email_mobile VARCHAR(255), advisory_role VARCHAR(100),
        expertise TEXT, short_bio TEXT, experience TEXT, previous_roles TEXT,
        achievements TEXT, education TEXT, certifications TEXT, links TEXT,
        photo_path VARCHAR(255), consent TINYINT(1), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS contact_details (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255), email VARCHAR(255), subject VARCHAR(255),
        message TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    conn.release();
    console.log('✅ MySQL Tables Ready');
  } catch (err) { console.error('⚠️ DB Error:', err.message); }
}

// 6. Routes

// --- Route: Professional Profile Submission ---
app.post('/api/profile', upload.single('photo'), async (req, res) => {
  const d = req.body;
  const photo = req.file ? req.file.path : null;

  try {
    // 1. Store in Database
    await pool.execute(
      `INSERT INTO professional_submissions 
      (full_name, designation, organization, location, email_mobile, advisory_role, expertise, short_bio, experience, previous_roles, achievements, education, certifications, links, photo_path, consent)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [d.fullName, d.designation, d.organization, d.location, d.emailMobile, d.advisoryRole, d.expertise, d.shortBio, d.experience, d.previousRoles, d.achievements, d.education, d.certifications, d.links, photo, d.consent === 'true' ? 1 : 0]
    );

    // 2. Send Email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Professional Profile: ${d.fullName}`,
      html: `
        <h2>New Application Details</h2>
        <p><strong>Name:</strong> ${d.fullName}</p>
        <p><strong>Designation:</strong> ${d.designation}</p>
        <p><strong>Organization:</strong> ${d.organization}</p>
        <p><strong>Location:</strong> ${d.location}</p>
        <p><strong>Role Applied:</strong> ${d.advisoryRole}</p>
        <p><strong>Experience:</strong> ${d.experience}</p>
        <p><strong>Education:</strong> ${d.education}</p>
        <p><strong>Links:</strong> ${d.links}</p>
        <p><strong>Bio:</strong> ${d.shortBio}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Profile saved and email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// --- Route: General Contact Submission ---
app.post('/api/contact-general', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Store in Database
    await pool.execute(
      `INSERT INTO contact_details (name, email, subject, message) VALUES (?, ?, ?, ?)`,
      [name, email, subject, message]
    );

    // 2. Send Email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Inquiry: ${subject}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Message saved and email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, async () => {
  console.log(`🚀 Server on port ${PORT}`);
  await initDB();
});