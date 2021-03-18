import React, { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";

function NavBottom() {
  const [modalState, setModal] = useState(true)
  const [location, setLocation] = useState(true)
  const [checkIn, setCheckIn] = useState(true)
  const [checkOut, setCheckOut] = useState(true)
  const [guests, setGuests] = useState(true)

  const showLocation = () => {
    setLocation(prevState => !prevState)
  }
  const showCheckIn = () => {
    setCheckIn(prevState => !prevState)
  }
  const showCheckOut = () => {
    setCheckOut(prevState => !prevState)
  }
  const showGuests = () => {
    setGuests(prevState => !prevState)
  }

  return (
    <div className='container'>
      {/* <div className="flexOuter">
      <div className="navFlex">
        <div className="flexLogo">
          <img className='airlogo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" />
        </div>

      <div className="places">
        <p>Place to stay</p>
      </div>
      <div className="experience">
        <p>Experience</p>
      </div>


      <div className="flexHost">
        <h1 className="host">Become a host</h1>
      </div>

      <div className="flexWeb">
        <img className="webIcon" src="https://www.flaticon.com/svg/vstatic/svg/876/876759.svg?token=exp=1615939427~hmac=a08d7e728c038642643e069345a57dde" />
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

 */}


        <div className="dropDownBackground">
          <div className="dropFlex">
          <div >
            <input type="input" className={`location location-${location}`} placeholder="Where are you going?" />
          </div>

          <div>
            <input type="button" className="checkIn" className={`checkIn checkIn-${checkIn}`} />
          </div>

          <div>
            <input type="button" className="checkOut" className={`checkOut checkOut-${checkOut}`}></input>
          </div>

          <div class="guestsClick" className={`guestsDiv guestsDiv-${guests}`}>
            <input type="button" className="guests" className={`guests guests-${guests}`} />
          </div>


        </div>

          <div class="locationTextDiv" onClick={()=>{showLocation()}} >
            <h1 class="locationText">Location</h1>
          </div>

          <div class="checkInTextDiv" onClick={()=>{showCheckIn()}} >
            <h1 class="checkInText">Check in</h1>
            <p class="checkInText2">Add Dates</p>
          </div>

          <div class="checkOutTextDiv" onClick={()=>{showCheckOut()}} >
            <h1 class="checkOutText">Check out</h1>
            <p class="checkOutText">Add Dates</p>
          </div>


          <div class="guestTextDiv" onClick={()=>{showGuests()}} >
            <h1 class="guestText">Guests</h1>
            <p class="guestText2">Add Guests</p>
          </div>
      </div>


{/*
      </div> */}
    </div>
  )
}

export default NavBottom