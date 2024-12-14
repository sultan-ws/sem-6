const express = require('express');
const token = '12345678';

const app = express();

const checkToken = (req, res, next)=>{
    if(!req.params.key) return res.status(400).json({message:'plaese send key'});
    if(token !== req.params.key) return res.status(401).json({message :'please send a valid key'});
    next();
}

app.get('/greet/:key?',checkToken, (req, res)=>{
    res.status(200).json({ message:'hello response'});
})

app.listen(4000, ()=>{
    console.log('server is running on port 4000');
})