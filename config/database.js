const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB ka connection is successful"))
    .catch((err)=>{
        console.log("Isssue in DB Connection");
        console.error(err.message);
        process.exit()
    })
}

module.exports=dbConnect;