const mongoose = require("mongoose");

const uri = "mongodb+srv://karki:Itsnoone123@cluster0.sxcttz4.mongodb.net/add?retryWrites=true&w=majority&appName=Cluster0 = = ====";
//mongoose.connect(URI);

const connectDb = async ()=> {
    try{
        await mongoose.connect(uri);
        console.log('MongoDB Connected...');

    }catch(error){
    console.error("The connection to the database failed");
    process.exit(0);
    }
}


module.exports = connectDb;