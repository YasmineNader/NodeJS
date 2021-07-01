const{MongoClient}=require('mongodb')
const dbconnection =(callback)=>{
    MongoClient.connect(process.env.dbURL,{},(error,client)=>{
        if(error) return callback(false)
        const db = client.db(process.env.dbName)
        callback(db)
    })
}

module.exports=dbconnection