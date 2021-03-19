import React, { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

function NavBar({ showMenu }) {
  return (
    <div className='container'>
      <div className="navFlex">
        <div className="flexLogo">
          <img className='airlogo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" />
        </div>

      <div className="flexSearch">
        <input type="submit" value="Start your search" className="navSearch" name="search" onClick={() => showMenu()}/>
      </div>


      <div className='searchIcon'>
        <IoSearchCircle color="red"  size={45} />
      </div>

      <div className='userIcon'>
        <FaUserCircle size={30} />
      </div>

      <div className="flexHost">
        <h1 className="host">Become a host</h1>
      </div>

      <div className="flexWeb">
        <img className="webIcon" src="https://airbnb-clone-airbnb-be-my-first-job.s3-us-west-1.amazonaws.com/global.png" />
      </div>

      <div className='flexButton'>
        <input type="button" className="navButton"></input>
      </div>

      <div className="burgerIcon">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      </div>


      {/* <div>
      <NavBottom />
      </div> */}
    </div>
  )
}

export default NavBar