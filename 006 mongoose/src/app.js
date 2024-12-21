const express = require('express');
const userRouter = require('./routes/userRoutes');

const websiteRoutes = express.Router();

websiteRoutes.use('/users', userRouter);

module.exports = websiteRoutes;