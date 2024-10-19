const express = require('express');
const bodyParser = require('body-parser');
const ruleRoutes = require('./routes/ruleRoutes');
const db = require('./db');

// Initialize express app
const app = express();
app.use(bodyParser.json());

// Set up routes
app.use('/api/rules', ruleRoutes);

// Connect to the database and start the server
db.connect((err) => {
  if (err) {
    console.error('Unable to connect to database:', err);
  } else {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
});
