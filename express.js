
const express=require('express')
const app=express()
 app.use((req,res,next)=>{
     console.log('In the middlew')
     next()
 })
 app.use((req,res,next)=>{
     console.log('In another the middlew')
     res.send("{ key1: value }")
 })

app.listen(3000)