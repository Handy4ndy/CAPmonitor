// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5501;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API route (you can expand this as needed)
app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

// Catch-all route to serve 'index.html' for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
