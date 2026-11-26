const express=require("express");
const server=express();
server.get("/api/time",(req,res)=>{
      const date=new Date();
      res.json({
        //date:();
        date:date.toLocaleDateString(),
        time:date.toLocaleTimeString()

      })
})
server.listen(3200,()=>{
    console.log("hello,http://localhost:3200/api/time")
})
