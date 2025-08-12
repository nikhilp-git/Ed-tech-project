const jwt=require("jsonwebtoken")
require("dotenv").config()
const User=require("../models/User")


//auth -> auth ke andar hum authentication check karte the jiske liye hum json web token verify karte the. We can extract token from body,cookie,bearer. Best practise is bearer and wrost practise is body.
exports.auth =async (req, res, next) => {
    try {
        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token);
        console.log("header",req.header("Authorization"));
        let token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
        // if(req.headers.authorization &&
        //     req.headers.authorization.startsWith("Bearer")
        //     ){
        //       try{
        //         token=req.headers.authorization.split(" ")[1];
        //       }catch{
        //         return res.status(401).json({
        //             success: false,
        //             message: "parasing error missing"
        //         })
        //       }
        //     }
        // const token = req.cookie.token 
        if (!token || token===undefined) {
            return res.status(401).json({
                success: false,
                message: "token missing"
            })
        }
        // verify the token 
        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch (e) {
            return res.status(401).json({
                success: false,
                message: "token is invalid"
            })
        }
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        })
    }
}
//isStudent
exports.isStudent=async(req,res,next)=>{
    try{
        // ek tarika ye h ki hum role ko req.body ke andar se access kar lenge
        if(req.user.accountType !=="Student"){
            return res.status(401).json({
                success:false,
                message:"this is protected route for student only"
            })
        }
        next()
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}


//isInstructor
exports.isInstructor=async(req,res,next)=>{
    try{
        // ek tarika ye h ki hum role ko req.body ke andar se access kar lenge
        if(req.user.accountType !=="Instructor"){
            return res.status(401).json({
                success:false,
                message:"this is protected route for Instructor only"
            })
        }
        next()
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}

//isAdmin
exports.isAdmin=async(req,res,next)=>{
    try{
        // ek tarika ye h ki hum role ko req.body ke andar se access kar lenge
        if(req.user.accountType !=="Admin"){
            return res.status(401).json({
                success:false,
                message:"this is protected route for Admin only"
            })
        }
        next()
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}








