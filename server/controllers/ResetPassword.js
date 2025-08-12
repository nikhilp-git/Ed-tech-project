const User=require("../models/User")
const mailSender=require("../utils/mailSender")
const bcrypt=require("bcrypt")


//reset passowrd token
exports.resetPasswordToken=async(req,res)=>{
    try{
        // get email from request body
    const email=req.body.email;

    //check user for this email , email validation
    const user=await User.findOne({email:email})
    if(!user){
        return res.json({
            success:false,
            message:"Your Email is not registerd with us !"
        })
    }

    //generate token
    const token=crypto.randomUUID()

    //update user by adding token and expiration time
    const updatedDetails=await User.findOneAndUpdate({email:email},{token:token,resetPasswordExpires:Date.now()+5*60*1000},{new:true}) //email ki help se search karo or token and resetPasswordExpires ki value update kar do. new:true ki help se jo updated response ki value return hote h

    console.log("updated details : ",updatedDetails)

    //create url
    const url=`http://localhost:3000/update-password/${token}`

    //send mail containing the url 
    await mailSender(email,"Password Reset Link",`Password reset Link: ${url}`)
    
    //return response
    return res.json({
        success:true,
        message:"Email send successfully . Please check email and change password"
    })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Cannot send reset Password message",
            error:err.message
        })
    }
}

//reset password
exports.resetPassword=async(req,res)=>{
   try{
     //data fetch
     const {password,confirmPassword,token}=req.body
     //validation
     if(password !==confirmPassword){
         return res.json({
             success:false,
             message:"Password not matching"
         })
     }
 
     //get user details from db using token
         //token ki help se hum user ki entry nikal sakenge jisse password update kar sakenge user ki entry mein
         const userDetails=await User.find({token:token})
         if(!userDetails){
             return res.json({
                 success:false,
                 message:"Token Invalid"
             })
         }

         console.log("User Details for resetPassword",userDetails)
 
     //if no entry token is invlid
 
 
     //check token time
         if(userDetails.resetPasswordExpires<Date.now()){
             return res.json({
                 success:false,
                 message:"Token is Expired . Please regenerate your token"
             })
         }
 
     //hash password
     const hashedPassword=await bcrypt.hash(password,10)

     console.log("hashedPassword",hashedPassword)

 
     //update password
     const updated=await User.findOneAndUpdate(
        { token: token },
        { password: hashedPassword },
        { new: true },
      );

      console.log("updated details: ",updated)
 
     //return response
         return res.status(200).json({
             updated,
             success:true,
             message:"Password reset successful"
         })
   }
   catch(err){
    console.log(err)
    res.status(500).json({
        error:err,
        message:false,
        message:"Cannot Reset Password"
    })
   }

}




