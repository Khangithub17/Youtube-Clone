import React from 'react'
import { MdHome, MdSlowMotionVideo, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater,MdLiveTv } from "react-icons/md";
import { RiPlayList2Fill,RiShoppingBag4Line } from "react-icons/ri";
import { BiLike,BiMoviePlay } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";
import { LuMusic } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si"

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdHome/>,
            name:"Home"
        },
        {
            icon: <MdSlowMotionVideo/>,
            name:"Shorts"
        },
        {
            icon: <MdSubscriptions/>,
            name:"Subscription"
        },
        
      
        {
            icon: <RiPlayList2Fill/>,
            name:"Your videos"
        },
        
       

    ];
    const otherLink = [
        {
            icon: <MdOutlineVideoLibrary/>,
            name:"Library"
        },
        {
            icon: <MdHistory/>,
            name:"History"
        },
        {
            icon: <MdOutlineVideoLibrary/>,
            name:"Library"
        },
        {
            icon: <MdOutlineWatchLater/>,
            name:"Watch later"
        },
        {
            icon: <BiLike/>,
            name:"Liked videos"
        }

    ];

    const otherLink2 = [
        {
            icon: <IoMdTrendingUp/>,
            name:"Trending"
        },
        {
            icon: <RiShoppingBag4Line/>,
            name:"Shopping"
        },
        {
            icon: <LuMusic/>,
            name:"Music"
        },
        {
            icon: <BiMoviePlay/>,
            name:"Movies"
        },
        {
            icon: <MdLiveTv/>,
            name:"Live"
        },
        {
            icon: <SiYoutubegaming/>,
            name:"Gaming"
        },
       
        
    ]



  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
      <ul>
        {mainLinks.map((link, index) => (
          <li key={index} className="flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer">
            {link.icon}
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4"/>
        <ul>
            {otherLink.map((link, index) => (
            <li key={index} className="flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer">
                {link.icon}
                <span>{link.name}</span>
            </li>
            ))}
        </ul>
        <hr className="my-4"/>
        <ul>
            {otherLink2.map((link, index) => (
            <li key={index} className="flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer">
                {link.icon}
                <span>{link.name}</span>
            </li>
            ))}
        </ul>
    </div>
   
  )
}

export default Sidebar
