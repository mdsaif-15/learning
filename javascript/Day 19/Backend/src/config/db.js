const mongoose = request("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase connected successfully")
}

module.exports = connectDB;