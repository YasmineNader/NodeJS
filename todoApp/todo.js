const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]

const getAllData = () => JSON.parse(localStorage.getItem('tasks')) || []

const setAllData = (tasks) =>localStorage.setItem('tasks', JSON.stringify(tasks))

const createCustomElement = (parent, element, classes , attributes, text) => {
    const myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(classes != '') myElement.className = classes
    if(text != '') myElement.textContent = text
    if(attributes.length != 0){    
        attributes.forEach(attribute=>{
            myElement.setAttribute(attribute.attrName, attribute.attValue)
        })
    }
    return myElement
}

// const drawTask = (task) =>{


//     console.log(task.id)
// }
const addTask = (task) =>{
    tasks = getAllData()
    tasks.push(task)
    setAllData(tasks)
}
 document.querySelector('#addTask')
let tasks = getAllData()
allTasks = document.querySelector('#allTasks')
rowContainer = createCustomElement(allTasks, 'div', 'row', [], '')
tasks.forEach((task,i)=>{
    // drawTask(task)
    taskDiv = createCustomElement(rowContainer, 'div', 'col-4 ', [], '')
    innerDiv = createCustomElement(taskDiv, 'div', 'm-4 bg-primary p-3', [], '')
    taskHeads.forEach(h=>{
        h5 = createCustomElement(innerDiv, "h5", "", [], task[h])
    })
    delBtn = createCustomElement(innerDiv, 'button', 'btn btn-danger c', [], 'delete')
    delBtn.addEventListener('click', function(e){
        tasks = getAllData()
        tasks.splice(i,1)
    this.parentElement.parentElement.remove()      
        setAllData(tasks)
    })
    updateBtn = createCustomElement(innerDiv, 'button', 'btn btn-success', [], 'Edit')
    updateBtn.addEventListener('click', function(e){
    document.getElementById('formbtn').innerText='update'
         tasks = getAllData()
    // console.log(task.status)
    //     // task.id
    dataForm=document.querySelector('#addTask')

    // taskHeads.forEach((h,i) => {

        
    //     if(i!=0 && h!="status") task[h] = dataForm.elements.task[h].value
    //     else if(h=="status") task[h] = dataForm.elements[h].checked
    // })

    taskHeads.forEach((h) => {


        if(h!="status")  dataForm.elements[h].value = task[h] 
        else if(h=="status") dataForm.elements[h].checked=task[h]
        
    })
       
        // dataForm.elements.id.value=task.id
        // dataForm.elements.title.value=task.title
        // dataForm.elements.content.value=task.content
        // dataForm.elements.taskType.value=task.taskType
        // dataForm.elements.dueDate.value=task.dueDate
        // dataForm.elements.status.checked=task.status
        // dataForm.elements.important.value=task.important

        
        
       
        



        setAllData(tasks)
    })
})

document.querySelector('#addTask').addEventListener('submit', function(e){
    e.preventDefault()

    dataForm=document.querySelector('#addTask')
    if(document.getElementById('formbtn').innerText=='update'){

      taskIdValue= dataForm.elements.id.value
      Taskvalue=tasks.findIndex(task=>task.id==taskIdValue )
  
      taskHeads.forEach((h) => {


        if(h!='id' && h!="status")   tasks[Taskvalue][h]=dataForm.elements[h].value 
        else if(h=="status") tasks[Taskvalue][h]=dataForm.elements[h].checked
    })

    // tasks[Taskvalue].title     =dataForm.elements.title.value
    // tasks[Taskvalue].content   =dataForm.elements.content.value
    // tasks[Taskvalue].taskType  =dataForm.elements.taskType.value
    // tasks[Taskvalue].dueDate   =dataForm.elements.dueDate.value
    // tasks[Taskvalue].status    =dataForm.elements.status.checked
    // tasks[Taskvalue].important =dataForm.elements.important.value

    setAllData(tasks)

    }
    else{

    if(tasks.length==0) task = {id:1}
    else { task = { id: (tasks[tasks.length-1].id+1)} }
    console.log(task)
    taskHeads.forEach((h,i) => {
        if(i!=0 && h!="status") task[h] = e.target.elements[h].value
        else if(h=="status") task[h] = e.target.elements[h].checked
    })
    addTask(task)
    this.reset()
}
location.reload();
    
})











// dels = document.querySelectorAll('.c')
// dels.forEach((d, i)=>{
//     d.addEventListener('click', function(e){
//         console.log(i)
//         tasks = getAllData()
//         tasks.splice(i,1)
//     console.log(this.parentElement)  
//     this.parentElement.parentElement.remove()      
//         setAllData(tasks)
//     })
    
// })
