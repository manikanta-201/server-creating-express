const express=require("express");
const app =express();

const port=5000



app.get('/mani',(req,res)=>{
res.send("hello manikanta")
})

app.listen(port,()=>{
console.log("the server is running succuss full")
})