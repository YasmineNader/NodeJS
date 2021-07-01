const express=require('express')
const app =express()
const teacherRouters=require('../routes/teachers.route')
require('../db/db')
app.use(express.json())

app.use(teacherRouters)
module.exports=app