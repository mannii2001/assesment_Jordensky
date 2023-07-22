import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="buttonsDiv">
       <Link to="/chartPage"> <button className='chartButton'>Chart Page</button></Link>
      </div>
    </div>
  )
}

export default Homepage
