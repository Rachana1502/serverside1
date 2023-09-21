const express=require ("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello From Rachana!!!!")
})
const PORT=process.env.PORT|| 4000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))