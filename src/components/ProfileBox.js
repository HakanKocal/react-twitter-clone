import React from 'react'
import profilePhoto from '../images/img_avatar.png'

function ProfileBox() {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
        <img src={profilePhoto} alt="profile" className='w-11 h-11 rounded-full'/>
        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>Hakan</span>
            <span className='text-gray-400 text-sm'>@hakan</span>
        </div>
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        </div>
    </div>
  )
}

export default ProfileBox