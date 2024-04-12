import React from 'react'
import tc from "../../assets/img/tc.png"
import './Community.css'

function Community() {
  return (
    <div className='container'>
      <div className='warpper'>
        <div className='start-warpper'>
            <div className='start-img'>
            <img src={tc}/>
            </div>

        </div>
        <div className='start-box'>
          <div className='start-b'>
            <h2 className='start-title'> Join our free tech community</h2>
            <p>Tap into the transformative potential of knowledge and innovation by becoming part of our dynamic and complimentary WhatsApp community.</p>
            <button className='registration-btn' >Join Now</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Community