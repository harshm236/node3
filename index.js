const express = require("express")

const app = express()

const Middlware1=(req,res,next)=>{
    console.log("middleware one")
    next();
}

const Middlware2=(req,res,next)=>{
    console.log("middleware two")
    next();
}
const Middlware3=(req,res,next)=>{
    console.log("middleware three")
    next();
}
app.use(Middlware1)
app.get("/page1",(req,res)=>{
    console.log("page1")
    res.send("page1")
})
app.get("/page2",Middlware2,(req,res)=>{
    console.log("page2")
    res.send("page2")
})
app.get("/page3",Middlware3,(req,res)=>{
    console.log("page3")
    res.send("page3")
})

app.listen(3030,()=>{
    console.log("server started at 3030")
})