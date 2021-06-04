const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Datadb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log("Connection Failed")
})