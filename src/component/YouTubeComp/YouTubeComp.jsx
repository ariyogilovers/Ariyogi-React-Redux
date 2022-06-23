import React, { Component } from 'react'
import  './YouTubeComp.css'



const YouTubeComp = (props) => {
  return (
    <div className='youtube-wrapper'>
        <div className="img-thumb">
            <img src="https://www.youtube.com/watch?v=0D_Tzkmcbis" alt=""/>
            <p className="time">{props.time}</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>    
    </div>
  )
}

YouTubeComp.defaultProps = {
    time: '0.00',
    title: 'No Title',
}


export default YouTubeComp