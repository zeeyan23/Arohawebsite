
const express=require("express");

const router=new express.Router();
const nodemailer=require("nodemailer");


router.post("/register",(req,res)=>{
    const {firstName}=req.body.enteredFirstName;
    const {lastName}=req.body.enteredLastName;
    const {description}=req.body.enteredDescription;
    const {companyname}=req.body.enteredCompanyName;
    const {phonenumber}=req.body.enteredNum;
    const {email}=req.body.enteredEmail;
    const {location}=req.body.enteredLocation;

    try{
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });

        const mailOptions={
            from:process.env.EMAIL,
            to:process.env.EMAIL,
            subject:`${req.body.enteredFirstName} has just showed interest`,
            html:`<h3>Hi</h3><h4>Entered Details are as follows----------</h4><br />
            <strong>Name:</strong> ${req.body.enteredFirstName} ${req.body.enteredLastName}<br />
            <strong>Email:</strong> ${req.body.enteredEmail}<br />
            <strong>Contact Number:</strong> ${req.body.enteredNum}<br />
            <strong>Company Name:</strong> ${req.body.enteredCompanyName}<br />
            <strong>Location:</strong> ${req.body.enteredLocation}<br />
            <strong>Comments:</strong> ${req.body.enteredDescription}</br />
            `
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error);
            }else{
                console.log("Email sent",info.response)
                res.status(201).json({status:201,info})
            }
        })
    }catch(error){
        res.status(201).json({status:401,error})
    }
})

module.exports=router