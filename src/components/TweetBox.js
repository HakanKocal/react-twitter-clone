import React,{useState} from 'react'
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icon";
import db from "../firebase";
import firebase from "firebase/compat/app";
import profilePhoto from '../images/img_avatar.png'

const TweetBox=()=> {
  const [content, setContent] = useState('')
  const sendTweet = ()=>{
    if(content !=='')
    {
      db.collection('feed').add({
        displayName:"Test User",
        userName:"@testUser",
        content,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        avatar:profilePhoto
      })
      setContent('')
    }
  }
  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
      <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' placeholder='what`s happening?' onChange={e=>setContent(e.target.value)}/>

      <div className='flex items-center justify-between'>
      <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' onClick={sendTweet}>Tweet</button>
      </div>
    </div>
  )
}

export default TweetBox