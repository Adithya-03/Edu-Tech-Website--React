import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import fimg from '../../assets/img/footer.png'



function Footer() {
    const onHandle = ()=>{
        window.scrollTo(0,0)
    }
  return (
    <footer className='footer'>
    <div className='container'>
        <div className='footer-warpper'>
            <div className='footer-box'>
                <div className='logo'>
                    <div className='logo-img'>
                        <img src={fimg}/>
                    </div>
                    <h3>Telflix AI</h3>

                </div>
                <p>Embrace the future of innovation and technology with our cutting-edge tech business solutions</p>
            </div>
            <div className='footer-box'>
                <h3 className='footer_title'> Company</h3>
                <ul className='footer-link'>
                    <li> <Link to={'/course'} style={{ textDecoration: 'none' , color: "black"}}>our program</Link></li>
                    <li> <Link to={'/plans'} style={{ textDecoration: 'none' , color: "black"}}>our Plan</Link></li>
                    {/* <li> <a href=''>Become a Member</a> </li> */}
                    <li> Become a Member </li>
                </ul>
            </div>
            
            
            <div className='footer-box'>
            <h3 className='footer_title'> Company</h3>
                <ul className='footer-link'>
                    <li> <Link to={'/about'} style={{ textDecoration: 'none' , color: "black"}} onClick={onHandle}>About</Link></li>
                    <li>  <Link to={'/contact'} style={{ textDecoration: 'none' , color: "black"}}>Contact</Link></li>
                    <li> <Link to={'/support'} style={{ textDecoration: 'none' , color: "black"}}>Support</Link></li>
                </ul>
                
            </div>
        </div>
    </div>
    </footer>
  )
}

export default  Footer
