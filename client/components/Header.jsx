import React from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

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
          <p>Superhost ·</p>
        </div>

        <div class="header-3">
          <a href="">Piha, Auckland, New Zealand</a>
        </div>


      <div class="flexTwo">
        <div class="header-4">
          <a href="" class='share'>Share</a>
        </div>

        <div class="saveIcon">
          <FiShare class="saveIcon" size={15} />
        </div>

        </div>
 <div class="header-5">
          <a href="">Save</a>
        </div>

        <div class="shareIcon">
          <BsHeart class="shareIcon" size={15} />
        </div>
 </div>
    </div>
  )
}

export default Header