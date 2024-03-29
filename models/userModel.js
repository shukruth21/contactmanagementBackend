const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"pls add the user name"],
    },
    email:{
        type:String,
        required:[true,"pls add the user name"],
        unique:[true,"email is already in use"],
    },
    password:{
        type:String,
        required:[true,"pls add the password"],
    },
},
{
    timestamps:true,
}
);
module.exports=mongoose.model("User",userSchema);