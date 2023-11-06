

const express = require('express')
const app = express();
const productrouter=require("./routes/products.routes")
const mongoose = require('mongoose');

const URL = ''
mongoose.connect(URL)
.then(result=>app.listen(5000,()=>console.log("server running")))
.catch(err=>console.log(err));


app.use(express.json());
app.use("/products",productrouter); 

