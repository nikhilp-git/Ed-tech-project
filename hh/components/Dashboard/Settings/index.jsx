import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from "../Settings/UpdatePassword"
import DeleteAccount from './DeleteAccount'


const SettingsIndex = () => {
  return (
    <div className='ml-10 mt-10 w-screen'>
      <h1 className='mb-14 text-3xl font-medium text-richblack-5 font-semibold '>Edit Profile</h1>

      {/* change profile picture */}
      <ChangeProfilePicture/>

      {/* profile */}
      <EditProfile/>

    <div className='w-[76%]'>
    <UpdatePassword/>
    </div>
      {/* password */}

      {/* delete account */}
      <DeleteAccount/>
      
    </div>
  )
}

export default SettingsIndex
