const express = require('express');
const websiteRoutes = require('./src/app');

const app = express();

app.use('/api', websiteRoutes);

app.listen(4500, ()=>{
    console.log('server is running on port 4500')
});