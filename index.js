const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  
    const apiKey = req.query.apiKey; 

    // Check if the API key is valid
    // Bill User for the API call

    res.send({ data: '🚒🚒🚒🚒🚒🚒🚒🚒' });

});

app.listen(8080, () => console.log('Server started on port 8080'));