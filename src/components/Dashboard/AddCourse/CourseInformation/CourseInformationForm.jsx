import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCourseCategories } from '../../../../services/operations/CourseDetailsApi'
import { CallTracker } from 'assert'
import ChipInput from './ChipInput'
import { MdUpload } from 'react-icons/md'
import Upload from './Upload'


const CourseInformationForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors}
    }=useForm()

    const dispatch=useDispatch()
    const {course,editCourse}=useSelector((state)=>state.course)
    const [loading,setLoading]=useState(false)
    const [courseCategories,setCourseCategories]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        const getCategories=async()=>{
            setLoading(true)
            const categories=await fetchCourseCategories()
            setCourseCategories(categories)
            setLoading(false)
        }

        getCategories()
    },[])

    const onSubmit=async(data)=>{

    }

    if(editCourse){
        setValue("courseTitle",course.courseName)
        setValue("courseShortDesc",course.courseDescription)
        setValue("coursePrice",course.price)
        setValue("courseTags",course.tag)
        setValue("courseBenefits",course.whatYouWillLearn)
        setValue("courseCategory",course.category)
        setValue("courseImage",course.thumbnail)
    }

    console.log("course categories",courseCategories)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-6 w-[calc(100vw-20rem)]'>
        <div>
            <label>Course Title<sup>*</sup></label>
            <input className="w-full" id='courseTitle' 
                placeholder='Enter Course Title'
                {...register("courseTitle",{required:true})}
            />
            {
                errors.courseTitle && (
                <span>Course Title is Required</span>
            )
            }
            </div>
            <div>
                <label>Course Short Description<sup>*</sup></label>
                <textarea id='courseShortDesc' placeholder='Enter Description'
                    {...register("courseShortDesc",{required:true})}
                className='min-h-[140px] w-full'/>
                {
                    errors.courseShortDesc && (
                        <span>Course description is required</span>
                    )
                }
            </div>
           
            <div>
            <label>Course Price<sup>*</sup></label>
            <input className="w-full" id='coursePrice' 
                placeholder='Enter Course Price'
                {...register("coursePrice",{required:true,valueAsNumber:true})}
            />
            
            {
                errors.coursePrice && (
                <span>Course Price is Required</span>
            )
            }
            </div>
            <div className=''>
                <label>Course Category<sup>*</sup></label>
                <select id='courseCategory' className='text-black' defaultValue=""
                {...register("couresCategory",{
                    required:true
                })}>
                    <option className='text-black' value="" disabled>Choose a category</option>
                    {
                        !loading && courseCategories.map((category,index)=>(
                            <option className=' bg-richblack-800 ' key={index} value={category?._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
                {errors.courseCategories && (
                    <span className='ml-2 text-xw tracking-wide text-pink-200'></span>
                )}
            </div>
            {/* Course Tags */}
            <ChipInput
                label="Tags"
                name="courseTags"
                placeholder="Enter Tags and press Enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            />
           <Upload
            name="courseImage"
            label="Course Thumbnail"
            register={register}
            setValue={setValue}
            errors={errors}
            editData={editCourse ? course?.thumbnail:null}
           />
    </form>
  )
}

export default CourseInformationForm
