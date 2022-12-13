import React, { useState } from 'react'
import ProfileBox from '../components/ProfileBox';
import SideLink from '../components/SideLink';
import { HomeIcon ,BookmarksIcon,ExploreIcon,NotificationsIcon,ListsIcon,ProfileIcon,MoreIcon,MessagesIcon} from '../icons/Icon'
import twitterLogo from '../images/twitter.svg'

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

function Sidebar() { 
  const [active, setActive] = useState("Home")

  const handleMenuItemClick=(name)=>{
    setActive(name)
  }

    return (
    <div className='h-screen sticky top-0 flex flex-col  justify-between w-72  px-2'>
        <div>
          <div className='mt-1 mb-4 ml-1 hover:bg-gray-lightest flex items-center justify-center w-12 h-12 rounded-full'>
          <img src={twitterLogo} alt="Twitter Logo" className='w-9 h-9'/>
          </div>
          
          <nav className='mb-4'> 
              <ul>
                {sideLinks.map(link => (
                  <SideLink key={link.name} name={link.name} Icon={link.icon} active={active} onMenuItemClick={handleMenuItemClick}/>
                  ))}
              </ul>
          </nav>
          <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>Tweet</button>
        </div>
        <ProfileBox/>
    </div>
  )
}

export default Sidebar