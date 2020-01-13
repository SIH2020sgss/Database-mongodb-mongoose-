const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const ComplaintSchema=new Schema({
    Content:{
        type:String,required:true
    },
    DatePosted:{
        type:Date
    },
    DateResolved:{
        type:Date
    },
    UID:{
    	type: mongoose.Schema.Types.ObjectId,
    }
});
const complaint = mongoose.model("Complaint",ComplaintSchema);
module.exports = complaint;