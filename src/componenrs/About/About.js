import React from 'react'
import miya from "../../assets/img/miya.jpg"
import './About.css'

function About() {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='about-team'>
                <div className='about-all'>
            <h2> Our Team</h2>
            <div className='team-member'>
                <img src={miya}/>
                <h4 className='team-member-name'>
                 Miya Jafree
                </h4>
                <p className='team-member-desc'>
                    co-Founter

                </p>
                </div>
            </div>
            </div>

            <div className='about-detail'>
                <h2>About us</h2>
                <p>Our mission at [Website Name] is to provide accessible and engaging educational content that inspires lifelong learning and personal growth. We strive to cultivate a supportive learning community where learners of all ages and backgrounds can thrive.</p>
            </div>
        </div>
    </div>

  )
}

export default About
