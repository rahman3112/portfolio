const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/send',async (req,res)=>{
   const {email,message} =req.body
   try{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: 'rahman90143@gmail.com',
            pass: 'opkz erst cmts rgom'
        }
    })

    await transporter.sendMail({
        from:email,
        to: 'rahman90143@gmail.com',
        subject:"CONSTACT ME EMAIL",
        text:message
    })
    res.status(200).json({success:true,message:"Email sent Successfully"})
   }catch(e){
       console.log(e)
       res.status(500).json({success:false,message:"Could not send email"})
   }
})

app.listen(5000,()=>{
    console.log("Server Running at port 5000")
})