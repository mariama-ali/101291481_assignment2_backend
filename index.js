const express = require('express');
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
const app = express();

mongoose.connect("mongodb+srv://101291481:ZLDDjX16Vqqx3FOY@cluster0.pxzss.mongodb.net/101291481-assignment2-backend?retryWrites=true&w=majority");


app.use(bodyparser.json());
app.use("/", require("./routes/emp"));
const cors = require('cors');
app.use(cors());


const port = process.env.PORT || 5555

app.listen(port, ()=>{
console.log(`server is up and listening on port ${port}`);
});