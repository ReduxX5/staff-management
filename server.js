const express = require('express');
const path = require('path');
require('dotenv').config();

// const app = require('./src/app');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);

const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });





