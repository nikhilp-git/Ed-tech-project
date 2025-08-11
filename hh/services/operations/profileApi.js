import toast from "react-hot-toast"
import {profileEndpoints} from "../apis.js"
import {apiConnector} from "../apiconnector.js"

const {
    GET_USER_ENROLLED_COURSE_API
}=profileEndpoints

export async function getUserEnrolledCourses(token){
    const toastId=toast.loading("Loading ...")
    let result=[]

    try{
        console.log("BEFORE CALLING BACKEND API FOR ENROLLED COURSES")
        const response=await apiConnector("GET",GET_USER_ENROLLED_COURSE_API,null,{
            Authorization:`Bearer ${token}`
        })
        console.log("AFTER CALLIGN BACKEND API FOR ENROLLED COURSES")
        console.log("GET USER ENROLLED COURSE API RESPOSNE",response)
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        result=response.data.data
    }
    catch(error){
        console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
        toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
  return result
}