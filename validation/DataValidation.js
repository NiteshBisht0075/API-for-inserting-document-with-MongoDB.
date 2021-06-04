const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name : {
        type:String
    },
    age : {
        type:Number
    },
    date: {
        type:Date
    }
})
const Data = new mongoose.model('data',dataSchema);
module.exports = Data;