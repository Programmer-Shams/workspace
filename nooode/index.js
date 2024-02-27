const express = require('express');
const axios = require('axios');
const data = require('./dummy');

const api = express();

const HOST = 'localhost';
const PORT = 8888;
const POST_URL = 'https://backend-test-pfm3.onrender.com/data';

api.get('/', (req, res) => {
  res.send('Welcome to this awesome API!');
});

api.get('/info', (req, res) => {
  res.status(200).json(data);
});

// Log the 'data' variable
console.log(data);

// Make a POST request to the specified URL with the 'data' variable
axios.post(POST_URL, data)
  .then(response => {
    console.log('POST request successful:', response.data);
  })
  .catch(error => {
    console.error('Error making POST request:', error.message);
  });

api.listen(PORT, () => console.log(`Server is running on ${HOST}:${PORT}!`));
