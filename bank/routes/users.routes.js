const express=require('express')
const router = new express.Router()
const userController= require('../controllers/users.controller')
router.get('', userController.NewUserForm)
router.post('', userController.addNewUser)
router.get('/showAll', userController.ShowAll)
router.get('/single/:id', userController.showSingel)
router.get('/delete/:id', userController.deleteUser)
router.get('/update/:id', userController.updateUserForm)
router.post('/update/:id', userController.updateUser)
router.get('/login', userController.loginForm)
router.post('/login', userController.checkLoginUser)

router.get('*',(req,res)=>{

    res.send('This Page Is Not Found')
})

module.exports=router