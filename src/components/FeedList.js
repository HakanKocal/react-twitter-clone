import React from 'react'
import FeedItems from './FeedItems'


const FeedList = ({tweets}) => {
  return (
    <div>
        {tweets.map((item,i)=>(
            <FeedItems {...item} key={i}/>
        ))}
    </div>
  )
}

export default FeedList