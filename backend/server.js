const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { testConnection } = require('./config/database');

// Load env vars
dotenv.config();



const app = express();

// Test database connection
testConnection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', require('./routes/posts'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Blogging API is running with MySQL' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});