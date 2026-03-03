const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth.routes');
const ticketRoutes = require('./routes/ticket.routes');
const staffRoutes = require('./routes/staff.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/staff', staffRoutes);

module.exports = app;