const express=require('express');
const app=express();
require('dotenv').config();



const PORT=  4590 || process.env.PORT;

const bodyparser=require('body-parser');
app.use(bodyparser.json());

const todoRoutes=require('./routes/todos');

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log("your server has been started");
})


const dbconnect=require('./config/database');
dbconnect();

app.get('/',(req,resp)=>{
    resp.send("you are entering in world of backend");
})