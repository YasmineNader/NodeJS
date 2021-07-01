const dbconnection=require("../db/db")
const {ObjectID}=require('mongodb')

 const NewUserForm = (req,res)=>{
    data={
        
        pageTitle:"add User"
        
    }

 res.render('user/register',data)

}

const addNewUser = (req,res)=>{
    data = req.body
    if(data.username&&data.password){
    dbconnection(db=>{
        if(!db)return console.log('dataBase Add user Error ')
        db.collection('user').insertOne(data,(e,result)=>{
            if(e) console.log(e)
            // else console.log(result)

            res.redirect('/login')
        })
    })
}else{
    res.redirect('/')
}
}


 const ShowAll=(req,res)=>{

    dbconnection(db=>{
        if(!db) return console.log('dataBase Show Error')

        db.collection('user').find().toArray((err,result)=>{
            if(err) console.log(err)
            // else{
            //     console.log(result)
            // }

            data={
                pageTitle:"Show Users",
                users:result
            }
            res.render('user/showAllUser',data)
        })
    })


}




const showSingel=(req,res)=>{

    id = req.params.id
    dbconnection(db=>{
        if(!db)return console.log('dataBase Single Error')
        db.collection('user').findOne({_id:new ObjectID(id)},(err,result)=>{
            data={
                pageTitle:"Single User",
                user:result
            }
            res.render('user/singleUser',data)
        })
    })


}
const deleteUser=(req,res)=>{
    id=req.params.id
    dbconnection(db=>{
        if(!db)return console.log('dataBase Delete Error')
        db.collection('user').deleteOne({_id:ObjectID(id)})
        .then(result=>{
            // console.log(result);
            res.redirect('/showAll')})
        .catch(e=>{
            console.log(e);
        })
})

}

const updateUserForm=(req,res)=>{
    id=req.params.id
    dbconnection(db=>{
        if(!db)return console.log('dataBase UpdateForm Error')
        db.collection('user').findOne({_id:ObjectID(id)},(err,result)=>{
            data={
                pageTitle:"Edit Form",
                user:result
            }
            res.render('user/EditUserForm',data)
        })
    })
   
}

const updateUser=(req,res)=>{
    newValues=req.body
    id=req.params.id
    dbconnection(db=>{
        if(!db)return console.log('dataBase Edit Error ')
        db.collection('user').updateOne({_id:ObjectID(id)},
        {$set:{username:newValues.username,password:newValues.password}})
        .then(data=>res.redirect('/showAll'))
        .catch(error=>console.log(error))
    })

}


const loginForm=(req,res)=>{

    res.render('user/login')

}

const checkLoginUser=(req,res)=>{
    data=req.body
    dbconnection(db=>{
        if(!db)return console.log('dataBase Login Error')
        db.collection('user').findOne({username:data.username,password:data.password},(error,result)=>{
            // console.log(result)
            if(result==null){
                res.send("Invalid Data Please Try Again")
            }else{
                res.redirect("/showAll")
            }
        })
    })

}



module.exports={
    NewUserForm,
    addNewUser,
    ShowAll,
    showSingel,
    deleteUser,
    updateUserForm,
    updateUser,
    loginForm,
    checkLoginUser
}