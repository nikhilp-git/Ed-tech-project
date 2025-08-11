import React from 'react'
import HighlightText from './HighlightText'
import KnowYourProgress from "../../../assets/Images/Know_your_progress.png"
import CompareYourProgress from "../../../assets/Images/Compare_with_others.png"
import PlanYourLessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'

const LearningLanguageSection = () => {
    return (
        <div>
            <div className="text-4xl font-semibold text-center my-10 flex flex-col items-center">
                Your swiss knife for
                <HighlightText text={"learning any language"} />
                <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
                  Using spin making learning multiple languages easy. with 20+
                  languages realistic voice-over, progress tracking, custom schedule
                  and more.
                </div>

                <div className='flex flex-row items-center justify-center mt-5'>
                    <img src={KnowYourProgress} alt="know-your-progress" className='object-contain -mr-32'/>
                    <img src={CompareYourProgress} alt="CompareYourProgress" className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'/>
                    <img src={PlanYourLessons} alt="Plan_your_lessons" className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16'/>
                </div>

                <div className='w-fit'>
                    <CTAButton active={true} children={"Learn More"} linkto={"/signup"}/>
                </div>
                
              </div>
    
              
        </div>
      )
}

export default LearningLanguageSection
