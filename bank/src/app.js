const express=require('express')
const hbs=require('hbs')
const path=require('path')

app=express() 
app.use(express.static(path.join(__dirname,"../public")))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../resourcse/views"))
hbs.registerPartials(path.join(__dirname,"../resourcse/layouts"))
const usersRoutes = require('../routes/users.routes')
const OperationRoutes=require('../routes/operation.routes')
app.use(express.urlencoded())

app.use(OperationRoutes)
app.use(usersRoutes)

module.exports=app