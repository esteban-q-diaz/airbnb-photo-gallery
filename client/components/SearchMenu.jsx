/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

function SearchMenu() {
  const [location, setLocation] = useState(true);
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [guests, setGuests] = useState(false);

  const showLocation = () => {
    setLocation((prevState) => !prevState);
    setCheckIn(() => false);
    setCheckOut(() => false);
    setGuests(() => false);
  };
  const showCheckIn = () => {
    setCheckIn((prevState) => !prevState);
    setLocation(() => false);
    setCheckOut(() => false);
    setGuests(() => false);
  };
  const showCheckOut = () => {
    setCheckOut((prevState) => !prevState);
    setCheckIn(() => false);
    setLocation(() => false);
    setGuests(() => false);
  };
  const showGuests = () => {
    setGuests((prevState) => !prevState);
    setCheckIn(() => false);
    setLocation(() => false);
    setCheckOut(() => false);
  };

  return (
    <div className="container">
      <div className="flexOuter">
        <div className="navFlex">
          <div className="flexLogo">
            <img className="airlogo" src="https://airbnb-clone-2021.s3-us-west-1.amazonaws.com/airbnb.png" alt="missing" />
          </div>
          <div className="places">
            <p className="placeText">Place to stay</p>
          </div>
          <div className="experience2">
            <p className="experienceText">Experience</p>
          </div>

          <div className="host-container">
            <div className="flexHost">
              <h1 className="host">Become a host</h1>
            </div>

            <div className="flexWeb">
              <img className="webIcon" src="https://airbnb-clone-airbnb-be-my-first-job.s3-us-west-1.amazonaws.com/global.png" alt="missing" />
            </div>

            <div className="flexButton">
              <input type="button" className="navButton" />
            </div>

            <div className="burgerIcon">
              <div className="hamburger" />
              <div className="hamburger" />
              <div className="hamburger" />
            </div>

            <div className="userIcon">
              <FaUserCircle size={30} />
            </div>
          </div>
        </div>

        <div className="dropDownBackground">
          <div className="dropFlex">
            <div className="t">
              <input type="input" className={`location location-${location}`} placeholder="Where are you going?" />
            </div>

            <div>
              <input type="button" className={`checkIn checkIn-${checkIn}`} />
            </div>

            <div>
              <input type="button" className={`checkOut checkOut-${checkOut}`} />
            </div>

            <div className={`guestsClick guestsDiv guestsDiv-${guests}`}>
              <input type="button" className={`guests guests-${guests}`} />
            </div>

          </div>

          <div className="locationTextDiv">
            <h1
              onClick={() => { showLocation(); }}
              className="locationText"
            >
              Location
            </h1>

          </div>

          <div className="checkInTextDiv">
            <h1
              onClick={() => { showCheckIn(); }}
              onKeyPress={() => { showCheckIn(); }}
              className="checkInText"
            >
              Check in
            </h1>
            <p className="checkInText2">Add Dates</p>
          </div>

          <div className="checkOutTextDiv">
            <h1
              onClick={() => { showCheckOut(); }}
              className="checkOutText"
            >
              Check out
            </h1>
            <p className="checkOutText2">Add Dates</p>
          </div>

          <div className="guestTextDiv">
            <h1
              onClick={() => { showGuests(); }}
              className="guestText"
            >
              Guests
            </h1>
            <p className="guestText2">Add Guests</p>
          </div>

          <div className="searchGuestsDiv">

            <div className="searchClick">
              <input type="button" className="searchBtn" />
            </div>

            <div>
              <h1
                onClick={() => { showGuests(); }}
                className="searchGuests"
              >
                Search
              </h1>
            </div>

            <div>
              <BiSearch className="glass" color="#FFF" size={22} />
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}

export default SearchMenu;
