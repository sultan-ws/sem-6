const express = require('express');
const { createUser } = require('../controllres/user');

const userRouter = express.Router();

userRouter.post('/register-user', createUser);

module.exports = userRouter;