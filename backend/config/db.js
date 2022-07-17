const mongoose = require("mongoose");

const connectDB = async () => {
 try {
       const dbConnection = await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to DB at: "+dbConnection.connection.host);
 } catch (error) {
    console.log(error);
 }
}
module.exports = connectDB;