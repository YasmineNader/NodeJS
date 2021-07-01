const teacherModel=require('../models/teacher.model')

const register=async(req,res)=>{
try{
    teacher = new teacherModel(req.body)
    await teacher.save()
    res.status(200).send({ 
        apistatus:true,
        Data:teacher,
        Message:'Data Inserted Successfully'
    })

    
}catch(e){

    res.status(500).send({ 
        apistatus:false,
        Data:e.message,
        error:'Error In Inserting Data'
    })
   
}

}

const AllTeachers=async(req,res)=>{
    try{
      const teachers = await teacherModel.find()
     if(teachers.length==0) res.send('Teachers Data Not Found')
      
        res.status(200).send({ 
            apistatus:true,
            Data:teachers,
         
        })
}catch(e){
    res.status(500).send({
        apistatus:false,
        error:e.message
    })
}
}

const singleTeacher = async(req,res)=>{
    try{
    _id=req.params.id
    single = await teacherModel.findById(_id)
    if(!single) res.send('Teacher Not Found')
    res.status(200).send({
        apistatus:true,
        Data:single,
    })
    }
    catch(e){
        res.status(500).send({
            apistatus:false,
            error:e.message
        })
    }

}

const deleteTeacher = async(req,res)=>{
    _id=req.params.id
    try{
    data= await teacherModel.findByIdAndDelete(_id)
    if(!data) res.send('Teacher Not Found')
    res.status(200).send({
        apistatus:true,
        Message:'Teacher Deleted Successfully'

    })
    }catch(e){
        res.status(500).send({
            apistatus:false,
            error:e.message
        })
    }
}
module.exports={
    register,
    AllTeachers,
    singleTeacher,
    deleteTeacher
}