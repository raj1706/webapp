const mongoose= require("mongoose");

//const DB= process.env.DATABASE;

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};
//mongoose.connect(DB,{
 //useNewUrlParser:true
//}).then(()=>console.log("database connected")).catch((err)=>console.log("err",err))