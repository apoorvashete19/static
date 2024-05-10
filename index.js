const express=require('express');  //import 
const app=express();                //call

app.use(express.static('public'));

app.listen(4000,()=>{
    console.log("server started--");
})