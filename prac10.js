const express=require("express");
const server=express();
const products=[{id:1,name:"rani",price:20},{id:2,name:"shyam",price:50},{id:3,name:"rahul",price:100}]
server.get("/greet",(req,res)=>{
      //const named=req.query.names;
      //const priced=Number(req.query.prices);
      //console.log(req.query)
  const item=products.filter((ele)=>{
   if(ele.name==="rahul" &&ele.price===100){
   //if(ele.name===named &&ele.price===priced){
        return true
    }
    else{
        return false
    }
  })
  res.json(item)
})
server.listen(3110,()=>{
    console.log("hello,http://localhost:3110/greet")
})
//http://localhost:3110/greet?names=shyam&prices=50
//http://localhost:3110/greet