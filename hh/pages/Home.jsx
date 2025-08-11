import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import "../index.css"
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import LoginForm from "../components/core/Auth/LoginForm"
import SignupForm from '../components/core/Auth/SignUpForm';
import Login from './Login';
import SignUp from './SignUp';


const Home = () => {
  return (
    <div>
    {/* Sectoion 1 */}
    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={" Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="w-10/12 mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 ">
          <video
            className="shadow-[15px_15px_rgba(255,255,255) rounded-lg"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1*/}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={<div className='text-4xl font-semibold'>
              Unlock Your <HighlightText text={"coding potential "}/>
              with our online courses
            </div>}
            subheading={
               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            
            

            ctabtn1={
              {
                btnText:"Try it Yourself",
                linkto:"/signup",
                active:true,
                gradientColorYellow:true
              }
              
            }
           
            ctabtn2={
              {
                btnText:"Learn more",
                linkto:"/login",
                active:false,
              }
              
            }

            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            
            backgroundGradient={<div className="absolute inset-0 codeblock1"></div>}
            
            
          />
        </div>

         {/* Code Section 2*/}
         <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={<div style={{whiteSpace:'pre-wrap'}} className='text-4xl font-semibold'>
              Start <HighlightText text={"coding\nin seconds "}/>
            </div>}
            subheading={
               "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }

            

            ctabtn1={
              {
                btnText:"Continue Lesson",
                linkto:"/signup",
                active:true,
                gradientColorYellow:false
              }
              
            }
            gradientColorYellow={
              {
                result:false
              }
            }
            ctabtn2={
              {
                btnText:"Learn more",
                linkto:"/signup",
                active:false,
              }
              
            }

            codeColor={"text-white"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="absolute inset-0 codeblock2"></div>}
            
            
          />
        </div>

            <ExploreMore/>
        </div>


            {/** Section 2 */}
            <div className='bg-pure-greys-5 text-richblack-700 relative mt-10'>
              <div className='homepage_bg h-[333px]'>
              <div className='w-11/12 max-w-maxContent flex items-center gap-5 mx-auto justify-center'>
                <div className='flex flex-row gap-7 text-white mt-52 '>
                  <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex items-center gap-3'>
                    Explore Full Catalog
                    <FaArrowRight/>
                    </div>
                  </CTAButton>

                  <CTAButton active={false} linkto={"/signup"}>
                      <div>Learn More</div>
                    </CTAButton>
                </div>
              </div>
              </div>

              <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                  <div className='text-4xl font-semibold w-[45%]'>
                  Get the skills you need for a<HighlightText text={"job that is in demand"}/>
                  </div>
                  <div className='flex flex-col gap-10 w-[40%] items-start'>
                  <div className='text-[16px]'>
                  The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                  </div>
                  <CTAButton active={true} children={"Learn More"} linkto={"/signup"}/>
                  
                  </div >
                </div>

                <TimelineSection/>
              
              <LearningLanguageSection/>
              </div>

             

            </div>


            {/**Section 3 */}
            <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-800 text-white'>

            <InstructorSection/>
            <h2 className='text-center text-rxl font-semibold mt-10'>Review from Other Learners</h2>

            </div>

            <Footer/>



        </div>
  )
  
}

export default Home
