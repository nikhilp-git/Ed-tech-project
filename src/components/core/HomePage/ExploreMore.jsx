import React,{useState} from 'react'
import { HomePageExplore } from '../../../data/homepage-explore'
import HighlightText from './HighlightText'
import CourseCard from './CourseCard'

const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );


    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
        console.log("COURSESSS",courses);
        console.log("currentttab",currentTab);
        console.log("currenntcarf",currentCard);
    };

  return (
    <div className='-mt-2 pb-40'>
      <div className='text-4xl font-semibold text-center'>
        Unlock the <HighlightText text={"Power of Code"}/>
      </div>
      <p className='text-center text-richblack-300 text-md font-semibold mt-3'>
        Learn to build anything you can imagine
      </p>

      <div className='flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100 mt-7'>
      {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[19px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}

        <div className='absolute flex flex-row mt-24 w-full justify-between -ml-52 z-10'>
        {
            courses.map((element,index)=>{
                return(
                    <CourseCard
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                )
            })
        }
        </div>
      </div>

    </div>
  )
}

export default ExploreMore
