const express = require("express");
const app = express();

// const dbconnection= require("./db")

const mongoose = require('mongoose');
const uri = "mongodb+srv://shantanusawant26:RgQ7INcGijt5L7iM@cluster0.pbuzob9.mongodb.net/vsTechHorizon?retryWrites=true&w=majority";
//const uri ="mongodb+srv://vstechhorizon:Software@cluster0.kljlv7f.mongodb.net/vsTechHorizon?retryWrites=true&w=majority&appName=Cluster0";
// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        // If connected successfully, proceed to save data
        // saveData();
    })
    .catch(err => console.error('Failed to connect to MongoDB Atlas:', err));



app.use("/",(req, res) => {
    res.json("Both userMessage and response fields are required" );
})

const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});














