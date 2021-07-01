const express = require('express')
const router = new express.Router()
const todoController = require('../controller/tasks.controller')

router.get('', todoController.showAll)
router.get('/addTask', todoController.addTask)
router.get('/showSingle/:id', todoController.showSingle)
router.get('/deleteTask/:id', todoController.deleteTask)
router.get('/editTask/:id', todoController.editTask)
router.get('/UpdateTask/:id', todoController.UpdateTask)

module.exports=router