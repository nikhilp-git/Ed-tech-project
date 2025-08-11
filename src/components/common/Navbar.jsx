import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links.js"
import { matchPath,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CiShoppingCart } from "react-icons/ci";

import { apiConnector } from '../../services/apiconnector.js'
import { categories } from '../../services/apis.js'
import ProfileDropdown from '../core/Auth/ProfileDropdown.jsx'
import { FaArrowAltCircleDown } from "react-icons/fa";


const subLinks=[
    {
        title:"python",
        link:"/catalog/python"

    },
    {
        title:"web dev",
        link:"/catalog/web-development"

    }
]

const Navbar = () => {

    //fetching reducer
    const {token}=useSelector((state)=>state.auth)
    const {user}=useSelector((state)=>state.profile)
    const {totalItems}=useSelector((state)=>state.cart)

    const location=useLocation()

    //const [subLinks,setSubLinks]=useState([])

    // const fetchSubLinks=async()=>{
    //     try{
    //         const result=await apiConnector("GET",categories.CATEGORIES_API)
    //         console.log("printing sublinks results : ",result)
    //         setSubLinks(result.data.data)
    //     }
    //     catch(err){
    //         console.log("could not fetch the category list ")
    //     }
    // }
    useEffect(()=>{
        //fetchSubLinks()
    },[])


    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname)
    }

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
      {/* added images */}
        <Link to="/">
            <img className="" width={160} height={32} src={logo} loading='lazy' />
        </Link>
        {/* NAV LINK */}
        <nav className="">
            <ul className="flex gap-6 text-richblack-25">
            {
                NavbarLinks.map((el,index)=>(
                    <li className="" key={index}>
                        {
                            el.title==="Catalog"?(
                             <div className='group relative flex items-center gap-2'>
                                <p className="">{el.title}</p>
                                <FaArrowAltCircleDown/>

                                <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                    <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                    {
                                        subLinks.length?(
                                            subLinks.map((subLink,index)=>(
                                                <Link to={subLink?.link} key={index}>
                                                <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">{subLink.title}</p>
                                                </Link>
                                            ))
                                        ):(<div></div>)
                                    }
                                </div>
                             </div>   
                            ):(
                                <Link to={el?.path}>
                                    <p className={`${matchRoute(el?.path)?"text-yellow-25":"text-richblack-25"}`}>
                                        {el.title}
                                    </p>
                                </Link>
                            )
                        }
                    </li>
                ))
            }
            </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className='navListLeft items-center gap-x-4 md:flex'>
            {
                user && user?.accountType!="Instructor" &&(
                    <Link to={"/dashboard/cart"} className='relative'>
                    <CiShoppingCart className='text-2xl text-richblack-100' />
                    {
                        totalItems>0 && (
                            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                {totalItems}
                            </span>
                        )
                    }
                    </Link>
                )
            }
            {
                token===null && (
                    <Link to="/login">
                        <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">Log in</button>
                    </Link>
                )
            }
            {
                token===null && (
                    <Link to="/signup">
                        <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">Sign Up</button>
                    </Link>
                )
            }
            {
                token !==null && <ProfileDropdown/>
            }
        </div>
      </div>
    </div>
  )
}













export default Navbar
