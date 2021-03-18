import React from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import {IconContext} from 'react-icons'

function Header() {
  return (

    <div>
      <div class="header">
      <h1>Piha Surf Shack</h1>
      </div>
      <div class="flex">
        <div class="star">
          <AiTwotoneStar color="red"/>
        </div>

        <div class="header-1">
          <p>4.98 (41) ·</p>
        </div>

        <div class="header-2">
          <p>superhost ·</p>
        </div>

        <div class="header-3">
          <p>Piha, Auckland, New Zealand</p>
        </div>


      <div class="flexTwo">
        <div class="header-4">
          <a href="">Share</a>
        </div>

        <div class="header-5">
          <a href="">Save</a>
        </div>
        </div>

 </div>
    </div>
  )
}

export default Header