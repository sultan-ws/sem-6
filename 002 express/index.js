const express = require('express');

const app = express();

app.get('/greet', (req, res)=>{
    console.log(req.query);
    res.send(`hello ${req.query.name}`);
});

app.post('/hello/:name/:age', (req, res)=>{
    console.log(req.params);
    res.send('post response');
});

app.put('/hello', express.json(), (req, res)=>{
    console.log(req.body);
    res.send('put response');
});


app.listen(4800, ()=>{
    console.log('server is running on port 4800');
});