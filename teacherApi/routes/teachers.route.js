const express = require('express')
const router = new express.Router()
const teacherController=require('../controller/teachers.controller')

router.post('/register',teacherController.register)
router.get('/AllTeachers',teacherController.AllTeachers)
router.get('/singleTeacher/:id',teacherController.singleTeacher)
router.get('/deleteTeacher/:id',teacherController.deleteTeacher)





module.exports=router