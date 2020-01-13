const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const UserSchema = new Schema({
    UID:{
        type:String,required:[true,'UserID is reequired!!'],unique:true
    },
    Email: {
        type:String,required:[true,'EMail is required!!']
    },
    Phone:{
        type:Number,required:[true,'Phone Number is required!!'],maxLength:10
    },
    Flags:{
        type:Number,max:3
    },
    CID:{
        type:Array,required:true
    }
});
const user=mongoose.model('user',UserSchema);
module.exports=user;

