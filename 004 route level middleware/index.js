const express = require('express');

const app = express();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

const m1 = (req, res, next)=>{ console.log('m1 called'); next();}; // on all routes
const m2 = (req, res, next)=>{ console.log('m2 called'); next();}; // on r1, r2
const m3 = (req, res, next)=>{ console.log('m3 called'); next();}; // on r3, r4
const m4 = (req, res, next)=>{ console.log('m4 called'); next();}; // on r5, r6

app.use(m1);
router1.use(m2);
router2.use(m3);
router3.use(m4);

router1.get('/r1', (req, res)=>{ res.status(200).json({message: 'response from r1'})});
router1.get('/r2', (req, res)=>{ res.status(200).json({message: 'response from r2'})});
router2.get('/r3', (req, res)=>{ res.status(200).json({message: 'response from r3'})});
router2.get('/r4', (req, res)=>{ res.status(200).json({message: 'response from r4'})});
router3.get('/r5', (req, res)=>{ res.status(200).json({message: 'response from r5'})});
router3.get('/r6', (req, res)=>{ res.status(200).json({message: 'response from r6'})});

app.use('/t1',router1);
app.use('/t2',router2);
app.use('/t3',router3);

app.listen(3400, ()=>{
    console.log('server is running on port 3400');
})