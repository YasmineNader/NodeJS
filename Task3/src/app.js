const express= require('express')
const hbs=require('hbs')
const path= require('path')


app=express()
app.set('view engine','hbs')


const publicDir =path.join(__dirname,'../public')
const viewDir =path.join(__dirname,'../resources/views')
const layoutDir =path.join(__dirname,'../resources/layouts')

app.use(express.static(publicDir))
app.set('views',viewDir)
hbs.registerPartials(layoutDir)


const todos =require('../controllers/todo.controller')
app.get('/addTodo',todos.addTodoController)
app.get('/showAll',todos.ShowAllTodos)
app.get('/showsingle/:id',todos.singleTodo)
app.get('/delete/:id',todos.deleteTodo)
app.get('/changeStatus/:id',todos.changeStatus)


app.get('/updateForm/:id',todos.updateform)
app.get('/editTodo/:id',todos.editTodo)


module.exports= app
