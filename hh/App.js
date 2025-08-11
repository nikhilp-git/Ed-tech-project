
import { ToastContainer } from "react-toastify";
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import 'react-toastify/dist/ReactToastify.css'; 
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"
import MyProfile from "./components/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error"
import SettingsIndex from "./components/Dashboard/Settings";
import EnrolledCourses from "./components/Dashboard/Settings/EnrolledCourses";
import Index from "./components/Dashboard/Cart/Index";
import { ACCOUNT_TYPE } from "./Utils/Constants";
import { useSelector } from "react-redux";
import AddCourse from "./components/Dashboard/AddCourse/Index";


function App() {

  const {user}=useSelector((store)=>store.profile)

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/update-password/:id" element={<UpdatePassword/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/dashboard/my-profile" element={<MyProfile/>}/>
        <Route element={<PrivateRoute>
          <Dashboard/>
          </PrivateRoute>} >
          {/* <Route path="*" element={<Error/>}/> */}
          <Route path="/dashboard/settings" element={<SettingsIndex/>}/>

          {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Index />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/add-course" element={<AddCourse/>} />
          
          </>
        )
      }
          
        </Route>
        
        
      </Routes>
      <ToastContainer position="top-center" reverseOrder={false}/>

    </div>
  );
}

export default App;




































































































































