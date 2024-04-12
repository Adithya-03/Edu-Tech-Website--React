import React from 'react'
import ai from '../../assets/img/ai.png'
import sd from '../../assets/img/sd.png'
import dg from '../../assets/img/dg.png'
import hacker from '../../assets/img/hacking.png'
import './Course.css'

function Course() {
    const courseData = [{
        title : "AI Development",
        desc : "Master AI Development",
        img :ai

    },
    {
        title : "CYBER SECURITY",
        desc : "Master CYBER SECURITY",
        img :sd

    },
    {
        title : "DIGITAL MARKETING",
        desc : "Master Digital Marketng !!!",
        img :dg

    },
    {
        title : "SOFTWARE DEVELOPMENT",
        desc : "Master Software Development!!!",
        img :hacker

    }
]
  return (
    <div className='container'>
    <div className='Course-title'>
        <h2>Our Free Course</h2>
        <p>Top trending course with free certification</p>
    </div>
    <div className="course-warper">
        {courseData.map((data, index) => (
            <div className='course-details' key={index}>
                <span className='course-icon'>
                    <img  src={data.img}/>
                </span>
                <span className='course-content'>
                    <h4 className='course-name'>{data.title}</h4>
                    <p className='course-desc'>{data.desc}</p>
                </span>
            </div>
        ))}
    </div>
</div>

    // <div className='container'>
    //     <div className='Course-title'>
    //         <h2>Our Free Course</h2>
    //         <p>Top trending course with free certification</p>
    //     </div>
    //     <div className="course-warper">
    //     {courseData .map((data , index)=>(

          
    //         <div className='course-details' key={index}>
    //             <span className='course-icon'>
    //                 <img  src={data.img}/>

    //             </span>
    //             <div className='course-content'>
    //                 <h4>{data.title}</h4>
    //                 <p>{data.desc}</p>
    //             </div>
    //         </div>
    //     ))}

    //     </div>

    // </div>
  )
}

export default Course