import React, { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import NavBottom from './NavBottom'

function NavBar() {
  const [modalState, setModal] = useState(false)

  const showSearchMenu = () => {
    setModal(prevState => !prevState)
  }

  return (
    <div class='container'>
      <div class="navFlex">

        <div class="flexLogo">
          <img class='airlogo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" />
        </div>

      <div class="flexSearch">
        <i class="fa fa-key icon"></i>
        <input type="button" value="Start your search" class="navSearch" name="search" placeholder="Start Your Search" onClick={() => showSearchMenu()}/>
      </div>


      <div class='searchIcon'>
        <IoSearchCircle color="red"  size={45} />
      </div>

      <div class="flexHost">
        <h1 class="host">Become a host</h1>
      </div>

      <div class="flexWeb">
        <img class="webIcon" src="https://www.flaticon.com/svg/vstatic/svg/876/876759.svg?token=exp=1615939427~hmac=a08d7e728c038642643e069345a57dde" />
      </div>

      <div class='flexButton'>
        <input type="button" class="navButton"></input>
      </div>

      <div class="burgerIcon">
        <div class="hamburger"></div>
        <div class="hamburger"></div>
        <div class="hamburger"></div>
      </div>
      </div>
    </div>
  )
}

export default NavBar