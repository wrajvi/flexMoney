const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

//mongoose.set("strictQuery", false);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://srthkngm:Vg8L1lF2w98Sq7eV@cluster0.9q5psz2.mongodb.net/?retryWrites=true&w=majority",{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`mongoDB Connected: ${conn.connection.host}`.cyan.bold);
    }
    catch(error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;