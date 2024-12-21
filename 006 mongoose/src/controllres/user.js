const createUser = async (req, res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:'success'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
};

module.exports = {
    createUser
}