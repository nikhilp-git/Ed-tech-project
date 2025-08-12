const nodemailer=require("nodemailer")
require("dotenv").config()

const mailSender=async(email,title,body)=>{
    try{
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST, // smtp.gmail.com
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info=await transporter.sendMail({
            from :'StudyNotion || Lalit Bhatt',
            to:`${email}`,
            subjects:`${title}`,
            html:`${body}`

        })
        console.log(info)
        return info;
    }
    catch(err){
        console.log(err.message)

    }
}

module.exports=mailSender;