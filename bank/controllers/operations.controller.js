const dbconnection = require("../db/db")
const{ObjectID}=require('mongodb')

const addOperationForm=(req,res)=>{
    operation={
        pageTitle:"Add Operation",
       
    }
    res.render('operations/addOpertaionForm',operation)

}
const addOperation=(req,res)=>{
    
    data=req.body
// console.log(data)
    if(data.amount&&data.date&&data.location){
dbconnection(db=>{
    if (!db) return console.log ("database Add Operation error")
    db.collection('operation').insertOne(data,(err,oper)=>{
        if(err) console.log(err)

           
            res.redirect('/showAllOperations')
    })
})
}  else{
    res.redirect('/operations')

}
}
const showAllOperations=(req,res)=>{

dbconnection(db=>{
    if(!db) return console.log('database Show Error')
    db.collection('operation').find().toArray((err,oper)=>{
if(err) console.log(err)
operation={
    pageTitle:'All Operations',
    operations:oper
}
res.render('operations/showAllOperations',operation)

    })
})

}
const singleOperation=(req,res)=>{
id = req.params.id
dbconnection(db=>{
    if(!db) return console.log('database single operation Error')
    db.collection('operation').findOne({_id:ObjectID(id)},(err,oper)=>{
        if (err) console.log(err)
        operation={
            pageTitle:'Operation Details',
            operations:oper
        }
        res.render('operations/singleOperation',operation)
    })
})


}
const deleteOperation=(req,res)=>{
    id=req.params.id
    dbconnection(db=>{
        if(!db) return console.log('database delete Error')
        db.collection('operation').deleteOne({_id:ObjectID(id)})
        .then(values=>{
          
        res.redirect('/showAllOperations')})
        .catch(err=>{
            console.log(err)})
    })
}

const editOperationForm=(req,res)=>{
    id=req.params.id
    dbconnection(db=>{
        if(!db) return console.log("database edit form Error")
        db.collection('operation').findOne({_id:ObjectID(id)},(err,oper)=>{
            if(err) console.log(err)
            operation={
                pageTitle:'edit Operation Form',
                operations:oper
            }

            res.render('operations/editOperationForm',operation)
        })
    })

}

const updateOperation=(req,res)=>{
    id = req.params.id
    newValues=req.body
    dbconnection(db=>{
        if(!db) return console.log('database update Operation error')
        db.collection('operation').updateOne({_id:ObjectID(id)},
        
        {$set:{amount:newValues.amount,date:newValues.date,location:newValues.location}})
        .then(oper=>res.redirect('/showAllOperations'))
        .catch(err=>console.log(err))
        

        
    })
    
}


module.exports={
 addOperationForm,
 addOperation,
 showAllOperations,
 singleOperation,
 deleteOperation,
 editOperationForm,
 updateOperation
}