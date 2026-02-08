const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/owner', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'owner.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
app.get('/courier', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'courier-panel.html'));
});


// API proxy routes (agar kerak bo'lsa)
app.post('/api/auth/login', async (req, res) => {
    // Bu yerda backend API ga so'rov yuborish mumkin
    // Yoki to'g'ridan-to'g'ri frontend dan backend ga murojaat qilish mumkin
    res.json({ message: 'Login endpoint - backendga ulang' });
});

// Server ishga tushirish
app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════╗
║                                              ║
║     🚀 Server ishga tushdi!                 ║
║                                              ║
║     📍 Manzil: http://localhost:${PORT}       ║
║                                              ║
║     📄 Sahifalar:                            ║
║        • Login:  http://localhost:${PORT}/    ║
║        • Owner:  http://localhost:${PORT}/owner║
║        • Admin:  http://localhost:${PORT}/admin║
║                                              ║
╚══════════════════════════════════════════════╝
    `);
});