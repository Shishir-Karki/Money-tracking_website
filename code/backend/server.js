
const express  = require("express");
const app = express();
const Router = require("./router");
const connectDb =  require('./db');
//middleware for the usae of json
app.use(express.json());

//to mount the router in the express app 
app.use("/api", Router);





const PORT = 5000;

connectDb().then(()=>{
   
    app.listen(PORT, () =>{
        console.log(`server is running at port: ${PORT} `);
    });
});