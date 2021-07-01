taskHelper = require('../helpers/myfunction.helper')


const addTask = (req, res)=>{
    let data = {
        pageTitle: 'add Task',
        errors :[],
        errorStatus:false
    }
    if(Object.keys(req.query).length != 0){
        if(req.query.title == '') data.errors.push('invalid title')
        if(req.query.content == '') data.errors.push('invalid content')
        if(data.errors.length == 0) {
            myInsertedData = req.query
            myInsertedData.status == 'on'?myInsertedData.status=true : myInsertedData.status=false;
            myInsertedData.id = Date.now()
            result = taskHelper.addData(myInsertedData)
            if(!result.helperStatus) {
                data.errors.push("cann't add to json file")
                // data.errorStatus=true
            }
//             else{
// res.redirect('/')
//             }
        }
        if(data.errors.length ==0)  res.redirect('/')
        data.errorStatus=true

    }
    res.render('add', data) // res.render('add', {name:'marwa',age:36})
}


const showAll = (req, res)=>{
    allTasks = taskHelper.readData()
    data = {
        pageTitle: 'all Tasks',
        tasks: allTasks,
        tasksLen: (allTasks.length==0?true:false)
    }
    res.render('all', data)
}

const showSingle = (req, res)=>{
    let data = {
        pageTitle: 'single Task',
        status: true
    }
    const id = req.params.id
    const allTasks = taskHelper.readData()
    let record = allTasks.find(task=> task.id == id )
    if(!record) data.status=false
    else data.myData=record
    res.render('single', data)
}
const deleteTask = (req, res)=>{
    const id = req.params.id
    const allTasks = taskHelper.readData()
    let record = allTasks.findIndex(task=> task.id == id )
    if(record!=-1) {
        allTasks.splice(record,1)
        taskHelper.writeData(allTasks)
    }

    res.redirect('/')
}
const editTask = (req, res)=>{
    id = req.params.id
    allTasks=taskHelper.readData()
    taskIndex=allTasks.findIndex(task=>task.id==id)

    data = {
        pageTitle: 'edit Task Form',
        task:allTasks[taskIndex],
        
    }
    res.render('edit', data)
}

const UpdateTask=(req,res)=>{
    allTasks=taskHelper.readData()
    id =req.params.id
    taskIndex=allTasks.findIndex(task=>task.id==id) 
    newdata=req.query
    newdata.id = allTasks[taskIndex].id
    let data = {
        errors :[],
        errorStatus:false,
        pageTitle: 'edit Task Form',
        task:newdata     
    }

    
    
   
     
        if(Object.keys(newdata).length != 0){
            if(newdata.title == '') data.errors.push('invalid title')
            if(newdata.content == '') data.errors.push('invalid content')
            if(data.errors.length == 0) {
                allTasks[taskIndex].title=newdata.title
                allTasks[taskIndex].content=newdata.content
                newdata.status == 'on'?newdata.status=true : newdata.status=false;
                allTasks[taskIndex].status=newdata.status 
                result = taskHelper.writeData(allTasks)
                res.redirect('/')
       
            }
            else{
                data.errorStatus = true;

                res.render('edit',data)
        }

        }
       
    }
    
    
    // allTasks=taskHelper.readData()
    // id=req.query.id
    // taskIndex=allTasks.findIndex(task=>task.id==id)
    // allTasks[taskIndex].title=newdata.title
    // allTasks[taskIndex].content=newdata.content
    // if (newdata.status == "on"){
    //     newdata.status=true
    // }else{
    //     newdata.status=false
    // }
    // allTasks[taskIndex].status=newdata.status
    // console.log(newdata)
    // taskHelper.writeData(allTasks)
    // res.redirect("/")

module.exports={ addTask, editTask, showAll, showSingle, deleteTask ,UpdateTask}


