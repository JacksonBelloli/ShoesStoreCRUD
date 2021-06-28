const express = require('express')
const app = express()
const routes = require('./api/routes')
const cors = require('cors')
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
};
  
app.use(cors(corsOpts));

app.use('/api', routes)
app.listen(8081)