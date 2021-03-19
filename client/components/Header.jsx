import React, { useEffect } from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

function Header( { details } ) {
  return (

    <div>
      <div className="header">
      <h1>{details[0].title}</h1>
      </div>
      <div className="flex">
        <div className="star">
          <AiTwotoneStar color="red"/>
        </div>

        <div className="header-1">
          <p>{`${details[0].ratingAverage} (${details[0].reviews}) `}·</p>
        </div>

        <div className="header-2">
          <p>{details[0].status} ·</p>
        </div>

        <div className="header-3">
          <a href="">{details[0].location} </a>
        </div>


      <div className="flexTwo">
        <div className="header-4">
          <a href="" className='share'>Share</a>
        </div>

        <div className="saveIcon">
          <FiShare className="saveIcon" size={15} />
        </div>

        </div>
 <div className="header-5">
          <a href="">Save</a>
        </div>

        <div className="shareIcon">
          <BsHeart className="shareIcon" size={15} />
        </div>
 </div>
    </div>
  )
}

export default Header