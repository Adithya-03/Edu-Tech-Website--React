import React from 'react'
import './Home.css'
import meta from '../../assets/img/meta.jpeg'

function Home() {
    const onClickHandle=()=>{
        window.open("https://www.youtube.com/@EDUTECHVlog")

    }
  return (
    <div className='container'>
        <div className='home-container'>
            <div className='home-content'>
                <h2 className='home-title'>Learn Every thing for free !</h2>
                <p>Master trending technologies  with Texflix  , Invest your time and return skills</p>
                <div className='home-btn'>
                    <button className='registration-btn' onClick={onClickHandle}>
                        Get Started
                    </button>
                    <button className='registration-btn'  onClick={onClickHandle}>
                        Watch Now!
                    </button>


                </div>
                </div>
            <div className='home-img'>
                <div className='home-img-warpper'>
                    <div className='box1'>
                        <img src= {meta}/>

                    </div>
                    <div className='whatapp-container'>
                        <h5> 500 + students</h5>


                    </div>
                    <div className='support'>
                        <h5> Active support</h5>

                    </div>


                </div>
                

            </div>

        </div>

    </div>
  )
}

export default Home