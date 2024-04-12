import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

// import Home from './componenrs/Home/Home'
import Course from '../course/Course'
import Header from '../header/Header'
import Community from '../Community/Community'
import Plans from '../plans/Plans'
import Footer from '../footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Support from '../Support/Support'

function Layout() {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/course' element = {<Course/>}/>
                <Route path='/community' element = {<Community/>}/>
                <Route path='/plans' element = {<Plans/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/support' element = {<Support/>}/>



             
            </Routes>
            {/* <Course/>
    <Community/>
    <Plans/> 
    <About/> */}
            <Footer/>
        </Router>
      
    </div>
  )
}

export default Layout
