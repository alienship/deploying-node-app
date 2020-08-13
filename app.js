const express=require('express');
const path=require('path');

const app=express();

//send an html/template view on root 
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

//an rest endpoint that respond back with the name. 
app.get("/api/:name",(req,res)=>{
    const name=req.params.name;

   res.status(200).json({
       message:`hi ${name}`
   });
});


//hosting provider itself sets environment variable for PORT
//so first we shoud check that, 
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
});



