const mongoose = request("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database Connected successfully");
}
module.exports = connectDB;