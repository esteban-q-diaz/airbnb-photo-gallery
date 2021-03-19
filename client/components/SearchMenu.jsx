import React, { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function SearchMenu() {
  const [location, setLocation] = useState(true)
  const [checkIn, setCheckIn] = useState(false)
  const [checkOut, setCheckOut] = useState(false)
  const [guests, setGuests] = useState(false)

  const showLocation = () => {
    setLocation(prevState => !prevState)
    setCheckIn(prevState => false)
    setCheckOut(prevState => false)
    setGuests(prevState => false)
  }
  const showCheckIn = () => {
    setCheckIn(prevState => !prevState)
    setLocation(prevState => false)
    setCheckOut(prevState => false)
    setGuests(prevState => false)
  }
  const showCheckOut = () => {
    setCheckOut(prevState => !prevState)
    setCheckIn(prevState => false)
    setLocation(prevState => false)
    setGuests(prevState => false)
  }
  const showGuests = () => {
    setGuests(prevState => !prevState)
    setCheckIn(prevState => false)
    setLocation(prevState => false)
    setCheckOut(prevState => false)
  }

  return (
    <div className='container'>
      <div className="flexOuter">
      <div className="navFlex">
        <div className="flexLogo">
          <img className='airlogo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" />
        </div>

      <div className="places">
        <p className="placeText">Place to stay</p>
      </div>
      <div className="experience2">
        <p className="experienceText">Experience</p>
      </div>

      <div className='userIcon2'>
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

      <div className="burgerIcon2">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      </div>




        <div className="dropDownBackground">
          <div className="dropFlex">
          <div className="t">
            <input type="input" className={`location location-${location}`} placeholder="Where are you going?" />
          </div>

          <div>
            <input type="button" className="checkIn" className={`checkIn checkIn-${checkIn}`} />
          </div>

          <div>
            <input type="button" className="checkOut" className={`checkOut checkOut-${checkOut}`}></input>
          </div>

          <div className="guestsClick" className={`guestsDiv guestsDiv-${guests}`}>
            <input type="button" className="guests" className={`guests guests-${guests}`} />
          </div>

          <div className="searchClick" >
            <input type="button" className="searchBtn"/>
            <BiSearch className="glass" color="#fff" size={22} />
          </div>




        </div>

          <div className="locationTextDiv"  >
            <h1 onClick={()=>{showLocation()}} className="locationText">Location</h1>
            
          </div>

          <div className="checkInTextDiv"  >
            <h1 onClick={()=>{showCheckIn()}} className="checkInText">Check in</h1>
            <p className="checkInText2">Add Dates</p>
          </div>

          <div className="checkOutTextDiv" >
            <h1 onClick={()=>{showCheckOut()}}  className="checkOutText">Check out</h1>
            <p className="checkOutText2">Add Dates</p>
          </div>


          <div className="guestTextDiv" o >
            <h1 onClick={()=>{showGuests()}} className="guestText">Guests</h1>
            <p className="guestText2">Add Guests</p>
          </div>

          <div className="searchGuestsDiv" >
            <h1 onClick={()=>{showGuests()}} className="searchGuests">Search</h1>
          </div>
      </div>



      </div>
    </div>
  )
}

export default SearchMenu