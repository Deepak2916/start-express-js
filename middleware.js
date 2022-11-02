const express=require('express')
 const bodyParser=require('body-parser')
 const app=express()

 app.use(bodyParser.urlencoded({extended:false}))
 app.use('/add_product',(req,res,next)=>{
     res.send(`<form action='/product'method='POST'>
     <input type='text' name='text'/>
     <button type='submit'>send</button>
     <input type='number' name='size'/>
     <button type='submit'>send</button>
     </form>`)
 })
 app.post('/product',(req,res,next)=>{
     console.log(req.body)
     res.redirect('/')
 })
 app.post('/',(req,res,next)=>{
    res.send("<h2>hello</h2>")
 })


app.listen(3000)