const mongoose =require('mongoose')
mongoose.connect(process.env.DBUrl,{
useNewUrlParser:true,
useFindAndModify:false,
useUnifiedTopology:true,
useCreateIndex:true
})