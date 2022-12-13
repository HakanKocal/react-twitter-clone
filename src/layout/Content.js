import React ,{useEffect,useState} from 'react'
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import {PopulerIcon} from '../icons/Icon'
import profilePhoto from '../images/img_avatar.png'
import db from "../firebase";
import FeedList from '../components/FeedList'

const Content = ()=>{
    const [tweets, setTweets] = useState([])
        useEffect(() => {
            db.collection("feed")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>
            setTweets(snapshot.docs.map((doc)=>doc.data())));
        }, [])
    return (
        <main className='flex-1 flex flex-col border-r border-l border-gray-extralight'>
      <header className='flex justify-between items-center p-4 border-b border-gray-extralight bg-white sticky top-0 z-10'>
        <span className='text-bold text-xl'>Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base"/>
      </header>
      <div className='flex px-4 py-3 space-x-4'>
      <img src={profilePhoto} alt="profile" className='w-11 h-11 rounded-full'/>
         <TweetBox/>
      </div>
      <Divider/>
      <FeedList tweets={tweets}/>
      </main>
    )
};

export default Content;