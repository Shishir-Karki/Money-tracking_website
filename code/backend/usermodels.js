const mongoose = require("mongoose");





const userSchema = new mongoose.Schema({
    category_select: {
        type: String,
        enum: ['Expense','Income'],
    },
    amount_input: { 
        type:Number, 
        require:true,
    } ,
    info:{ 
        type : String,          
        require: true,
    },
    date_input: {
        type: Date,
        require: true,
    
    },

});
userSchema.pre("save", async function (next){
    const user = this;


});

// app.post("/add", (req,res) =>{
//     var category_select = req.body.category_select
//     var amount_input= req.body.amount_input
//     var info = req.body.info
//     var date_input = req.body.date_input

//     var data={
//         "Category": category_select,
//         "Amount" : amount_input,
//         "Info": info,
//         "Date": date_input
//     }
//     db.collection('users').insertOne(data, (err,collection) => {
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully")

//     })
// })

//define the model or the collection name 
const User = new mongoose.model("add",userSchema);
module.exports=User;