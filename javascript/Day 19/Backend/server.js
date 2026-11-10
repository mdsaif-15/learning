request("dotenv").config();

const app = require("./src/app");
const POST = process.env.POST || 5000;
const connectDB = require("./src/config/db.js");

connectDB();

app.listen(POST, () => {
    console.log(`server is running on port ${PORT}`);
});
