const http = require('http');

const controller = (req, res)=>{
    console.log(req.method);
    if(req.method === 'GET'){
        res.end('hello');
    }
   
};

http.createServer(controller).listen(4200);