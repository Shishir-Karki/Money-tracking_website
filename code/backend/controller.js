const User = require ("./usermodels");


// homepage 
const home = async (req,res) => {
    try{
        res
        .status(200)
        .send("WElcome t the controllers part or i dk");

    } catch(error){
        //console.log(error)
        next(error);

    }
}

//saving the data saved when clicking add

const add = async (req,res) =>{
    try{
        console.log(req.body);
        const {category_select,amount_input, info, date_input}= req.body;

        
   
       const userCreated =  await User.create({
        category_select,
        amount_input,
        info,
        date_input
    });

        res.status(201).json({
            msg:"data succesfully saved",
            
            userID : userCreated._id.toString() });
        
    }catch(error){
        res.status(500).json({message:"Error in Sending data"});
        
    }
}



 




module.exports = { home, add };
