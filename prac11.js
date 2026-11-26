const express=require("express");
const server=express();

server.get("/greet",(req,res)=>{
     const name=req.query.names;
     const age=req.query.ages;
     res.json({
        named:name,
        aged:age
     })

})
   
    

server.listen(3910,()=>{
    console.log("hello,http://localhost:3910/greet?names=vijay&ages=50")
})