fs= require('fs')

const readTodo=()=>{
    try{
        
    data = JSON.parse(fs.readFileSync('AllTodos.json').toString())
}catch(e){
    
    data=[]
}
   return data 
}

const writeTodo=(data)=>{
    try{
    fs.writeFileSync('AllTodos.json',JSON.stringify(data))
    }catch(e){
        fs.writeFileSync('AllTodos.json','[]')
    }
    
}

const addTodo=(res,todo)=>{
    alltodos=readTodo()
    alltodos.push(todo)
    writeTodo(alltodos)
    res.redirect('/showAll')
    
    
}


const addTodoController = (req,res)=>{
    
 //todo={id:i+1,title:'',content:'', status:''}

alltodos=readTodo()
todo=req.query
todo.id = (alltodos.length)+1

// if(typeof req.query.status == "undefined"){
// todo.status=false
// }
// else{
// todo.status=true
// }

if(todo.status=='on'){

    todo.status=true


}else{
    todo.status=false
}



// if(todo.title ==""||todo.content =="" ){
//     //res.redirect('/addTodo')
// }
if(todo.title&&todo.content){  
    addTodo(res,todo);
    
}
//if(req.query.id||req.query.title||req.query.content||req.query.status)


res.render('add',{pageTitle:'AddTodo'})
}


 const ShowAllTodos =(req,res)=>{
    data={
    pageTitle:'Show All',
    alltodos:readTodo()

    }
    
    res.render('showAll',data)

  }



const singleTodo=(req,res)=>{
alltodos=readTodo()
id=req.params.id
todoindex = alltodos.findIndex(todo => todo.id==id)

singledata={
pageTitle:'single Todo',
single:alltodos[todoindex]
}
// console.log(singledata)
// console.log(alltodos[id-1])

 res.render('showSingle',singledata)

}

const deleteTodo =(req,res)=>{
alltodos =readTodo()
    id=req.params.id
    todoindex = alltodos.findIndex(todo => todo.id==id)
    alltodos.splice(todoindex,1)
    writeTodo(alltodos)
    res.redirect('/showAll')
}

const changeStatus=(req,res)=>{

    alltodos=readTodo()
    id=req.params.id
    todoindex = alltodos.findIndex(todo => todo.id==id)
    singletodo=alltodos[todoindex];
    console.log(alltodos[todoindex].status)
    if(singletodo.status==true){
        singletodo.status=false
    }else
    {
        singletodo.status=true;
    }
    
    writeTodo(alltodos)
    // console.log(alltodos)
    res.redirect('/showAll')
}





const updateform=(req,res)=>{
    alltodos=readTodo()
    console.log(alltodos)
    id=req.params.id
    todoindex = alltodos.findIndex(todo => todo.id==id)
   // console.log(alltodos[todoindex].status)
    data={
        pageTitle:'Edit Form',
        singletodo:alltodos[todoindex],
        checked:alltodos[todoindex].status==true? "checked" :""
    }
    //  console.log(data.singletodo)
    
    res.render('editform',data)
}

const editTodo=(req,res)=>{

    alltodos=readTodo()
    id=req.params.id
    todoindex = alltodos.findIndex(todo => todo.id==id)
    singletodo=alltodos[todoindex]

    // console.log(singletodo.title)
    // console.log(singletodo)
     newData=req.query

    if(req.query.title&&req.query.content){
        singletodo.title=newData.title
        singletodo.content=newData.content
        
        if(newData.status=='on'){
            
            singletodo.status=true
        }else{
            singletodo.status=false
        }
        // singletodo.status=newData.status
        // singletodo.title=req.query.title
        // singletodo.content=req.query.content
        // singletodo.status=req.query.status        
        // console.log(singletodo)
        writeTodo(alltodos)
        // console.log(alltodos)
        res.redirect('/showAll')
        
    }
   
    
        
    

}

module.exports={
    addTodoController,
    ShowAllTodos,
    singleTodo,
    deleteTodo,
    changeStatus,
    updateform,
    editTodo
}

