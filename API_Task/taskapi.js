// const myPassword = (password)=> {
 
//     let pass = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (password == 123456){
//                 resolve('your password is correct')

//             }else{
//                 reject('your password is uncorrect')

//             }
//         },2000)
//     })
// return pass
// }


//  checkPassword =async()=>{
// try{

//     p= await myPassword('1234456')
//     console.log(p)

// }catch(e){
//     console.log(e)
// }



// }

// checkPassword()



// const getData=async(AllData)=>{
// try{
//     let d= await fetch('https://api.covid19api.com/summary')
//     let data=await d.json()
//     AllData(data,false)
// }catch(e){
//     AllData(false,e)}
// }




// getData((data,error)=>{

// if(data){
//    x= data.Countries
// // console.log(x)
// x.forEach((element,i) => {
//     // console.log(element.Country)
//     console.log(element)
// });

// }else{
//     console.log(error)
// }
// })




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

heads = ['Country', 'NewConfirmed', 'TotalConfirmed',' NewDeaths','TotalDeaths','NewRecovered','TotalRecovered']
const parent = document.querySelector('#tableContent')
const newTable = createCustomElement(parent, 'table', 'table table-stripped', [], '')
const newTableHead = createCustomElement(newTable, 'thead', '', [], '')
const newTableBody = createCustomElement(newTable, 'tbody', '', [], '')
let tr = createCustomElement(newTableHead, 'tr', '', [], '')
 
heads.forEach( h => createCustomElement(tr, 'th','', [], h))

// posts.forEach(post=>{
//     tr= createCustomElement(newTableBody, 'tr', '', [], '')
//     heads.forEach( h => th = createCustomElement(tr, 'td','', [], post[h]))
// })



const getData=async(AllData)=>{
    try{
        let d= await fetch('https://api.covid19api.com/summary')
        let data=await d.json()
        AllData(data,false)
    }catch(e){
        AllData(false,e)}
    }
    
    
    
    
    getData((data,error)=>{
    
    if(data){
       x= data.Countries
    // console.log(x)
    x.forEach((element) => {
        tr= createCustomElement(newTableBody, 'tr', '', [], '')
        heads.forEach( h => createCustomElement(tr, 'td','', [], element[h]))
        // console.log(element.Country)
        console.log(element)
    });
    
    }else{
        console.log(error)
    }
    })
    
    


