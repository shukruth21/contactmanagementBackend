const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel")
//@desc get all contacts
//@routes get /api/contacts
//@access public
const getContacts= asyncHandler( async(req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});

//@desc create contact
//@routes post /api/contacts
//@access public
const createContact=asyncHandler( async(req,res)=>{
    console.log("the request body is:",req.body)
    const { name,email,phone }= req.body;
    if(!name|| !email|| !phone){
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const contact= await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});

//@desc get contact for id
//@routes get /api/contacts/:id
//@access public
const getContact=asyncHandler( async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});

//@desc update contact details
//@routes put /api/contacts/:id
//@access public
const updateContact=asyncHandler( async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );
    res.status(200).json(updatedContact);
});

//@desc delete contact for given id
//@routes delete /api/contacts/:id
//@access public
const deleteContact=asyncHandler( async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    
    await Contact.deleteOne({_id: req.params.id});;
    res.status(200).json(contact);
});

module.exports={getContacts,createContact,getContact,updateContact,deleteContact};