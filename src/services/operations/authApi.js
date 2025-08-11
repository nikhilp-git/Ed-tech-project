import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import {setLoading, setToken} from "../../slices/authSlice"
import {setUser} from "../../slices/profileSlice"
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
import { resetCart } from "../../slices/cartSlice";




const {RESETPASSWORD_API,
    RESETPASSSWORDTOKEN_API,
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API
}=endpoints

export function sendotp(email,navigate){
  return async (dispatch)=>{
    const toastId=toast.loading("Loading")
    dispatch(setLoading(true))
    try{
      const response=await apiConnector("POST",SENDOTP_API,{email})

      console.log("SENDOTP API RESPONSE .........",response)

      console.log(response.data.success)

      if(!response.data.success){
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    }
    catch(err){
      console.log("SENTOTP AI ERROR ............",err)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function getPasswordResetToken(email,setEmailSent){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        console.log("REACT_APP_BASE_URL:", process.env.REACT_APP_BASE_URL);

        try{
            const response=await apiConnector("POST",RESETPASSSWORDTOKEN_API,{email})

            console.log("RESET PASSWORD TOKEN RESPONSE....",response)

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Reset Email Sent")
            setEmailSent(true)
        }
        catch(err){
            
            console.log("RESET PASSWORD TOKEN ERROR",err)
            toast.error(`Failed to send email for resetting password ${err}`)
        }
        dispatch(setLoading(false))
    }
}


export function resetPassword(password, confirmPassword, token,navigate) {


    return async(dispatch) => {
      dispatch(setLoading(true));
      try{
        const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});
        console.log("RESET Password RESPONSE ... ", response);
        if(!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Password has been reset successfully");
        navigate("/")
  
      }
      catch(error) {
        console.log('error n authApi');
        console.log("RESET PASSWORD TOKEN Error", error);
        toast.error("Unable to reset password");

      }
      dispatch(setLoading(false));
    }
  }

export function signUp(
  accountType,firstName,lastName,email,password,confirmPassword,otp,navigate
){
  return async(dispatch)=>{
    const toastId=toast.loading("Loading")
    dispatch(setLoading(true))
    
    try{
      const response=await apiConnector("POST",SIGNUP_API,{
        accountType,firstName,lastName,email,password,confirmPassword,otp
      })

      console.log("SIGNUP API RESPONSE .......",response)

      if(!response.data.success){
        throw new Error(response.data.message)
      }
      toast.success("Signup successful")
      navigate("/login")
    }
    catch(err){
      console.log("SIGNUP API ERROR............", err)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email,password,navigate){
  return async(dispatch)=>{
    const toastId=toast.loading("Loading")
    dispatch(setLoading(true))
    try{
      const response=await apiConnector("POST",LOGIN_API,{
        email,password
      })

      console.log("Login Api response ......",response)

      if(!response.data.success){
        throw new Error(response.data.message)

      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))

      const userImage=response?.data?.user?.image?response.data.user.image:`https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      

      dispatch(setUser({...response.data.user,image:userImage}))

      localStorage.setItem("token",JSON.stringify(response.data.token))
      localStorage.setItem("user",JSON.stringify(response.data.user))
      navigate("/dashboard/my-profile")
    }
    catch(err){
      console.log("LOGIN API ERROR............", err)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate){
  return (dispatch)=>{
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}