const express =require('express')
const router= new express.Router()
const operationController=require('../controllers/operations.controller')
router.get('/operations',operationController.addOperationForm)
router.post('/operations',operationController.addOperation)
router.get('/showAllOperations',operationController.showAllOperations)
router.get('/singleOperation/:id',operationController.singleOperation)
router.get('/deleteOperation/:id',operationController.deleteOperation)
router.get('/updateOperation/:id',operationController.editOperationForm)
router.post('/updateOperation/:id',operationController.updateOperation)


module.exports=router