const express = require("express");
const app = express();

const dbconnection= require("./db")

const conatactUsRouters = require("./contactUsRouters");



app.use("/",(req, res) => {
    res.json("Both userMessage and response fields are required" );
})
app.use("/contact", (req, res) => {
    res.json("B" );
});
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});














