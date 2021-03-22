import React from 'react';
import PropTypes from 'prop-types';
import { IoSearchCircle } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';

function NavBar({ showMenu }) {
  return (
    <div className="container">
      <div className="navFlex">
        <div className="flexLogo">
          <img className="airlogo" src="https://airbnb-clone-2021.s3-us-west-1.amazonaws.com/airbnb.png" alt="missing" />
        </div>

        <div className="flexSearch">
          <input type="submit" value="Start your search" className="navSearch" name="search" onClick={() => showMenu()} />
        </div>

        <div className="searchIcon">
          <IoSearchCircle color="red" size={45} />
        </div>

        <div className="userIcon">
          <FaUserCircle size={30} />
        </div>

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
      </div>
    </div>
  );
}

NavBar.propTypes = {
  showMenu: PropTypes.instanceOf(Object).isRequired,
};

export default NavBar;
