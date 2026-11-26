const express=require("express")
const server=express();
let students=[{namees:"bjsn",id:1},{namees:'vgdhs',id:2}]


server.get("/search",(req,res)=>{
    
  const studentss=students.filter((ele)=>{
   
        if(ele.namees==="bjsn"){
            return true;
        }
        else{
            return false;
        }
  })
  res.json(studentss)
})
server.listen(3900,()=>{
    console.log("first server,http://localhost:3900/search?name=bjsn")  
})