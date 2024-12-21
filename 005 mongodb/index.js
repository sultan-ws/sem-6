const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb+srv://sultankhan:sj1XtNfoMKK1If1T@sultan.luvya.mongodb.net/?retryWrites=true&w=majority&appName=sultan';

const app = express();
app.use(express.json());

const client = new MongoClient(url);

const connect = async()=>{
    await client.connect();
    const db = client.db('productDB');
    const Product = db.collection('products');
    return Product;
}

app.post('/insert-data', async (req, res)=>{
    try{
        const Product = await connect();
        console.log(req.body);

        const response = await Product.insertOne(req.body);

        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
});

app.get('/read-data', async (req, res)=>{
    try{
        const Product = await connect();
        const response = await Product.find().toArray();
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
});

app.put('/update-data/:id', async (req, res)=>{
    try{
        // console.log(req.params);
        const Product = await connect();
        const response = await Product.updateOne(
            {_id: new ObjectId(req.params.id)},
            {
                $set: req.body
            });
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
});

app.delete('/delete-data/:id', async (req, res)=>{
    try{
        // console.log(req.params);
        const Product = await connect();
        const response = await Product.deleteOne({_id : new ObjectId(req.params.id)});
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
});
//https://github.com/sultan-ws/sem-6

app.listen(4800, ()=>{
    console.log('server is running on port 4800');
})