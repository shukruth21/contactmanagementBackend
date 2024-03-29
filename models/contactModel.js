const mongoose=require("mongoose");

const contactSchema=mongoose.Schema(
    {
    name:{
        type:String,
        required:[true,"pls add your name"],

    },
    email:{
        type:String,
        required:[true,"pls add your email addres"],

    },
    phone:{
        type:String,
        required:[true,"pls add your phone number"],

    },
},
{
    timestamps:true,
}
);
module.exports=mongoose.model("Contact",contactSchema);