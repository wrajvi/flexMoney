require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const route = require('./routes/route');
const cors = require('cors');


const app = express();
// Enable CORS for all routes
app.use(cors());


connectDB();

app.use(express.json());

app.get('/',function(req,res){
    res.send("API is Running");
});

app.use('/',route);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`.green.bold)
})
