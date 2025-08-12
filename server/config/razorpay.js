require('dotenv').config({path:'../.env'})
const Razorpay=require("razorpay")


console.log('RAZORPAY_KEY:', process.env.RAZORPAY_KEY);  // This should log your Razorpay key
console.log('RAZORPAY_SECRET:', process.env.RAZORPAY_SECRET);  
console.log('RAZORPAY_SECRET:', process.env.FOLDER_NAME); 

exports.instance=new Razorpay({
    key_id:process.env.RAZORPAY_KEY,
    key_secret:process.env.RAZORPAY_SECRET
})







