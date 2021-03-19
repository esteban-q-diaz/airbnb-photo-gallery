import React, { useState } from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Images( { showGallery } ) {
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  return (

    <div className="imagesContainer">

      <div className="flexIcons">
      <div className="flexIconsA">
        <Link to='/'>
        <IoIosArrowBack onClick={()=>{showGallery()}} size={25}/>
      </Link>




        </div>
        <div className="flexIconsB">
          <FiShare className="shareImgIcon" size={20} />
        </div>

        <div className="flexIconsC">
          <a href="">Share</a>
        </div>

        <div className="flexIconsD">
          <BsHeart className="saveImgIcon" size={20} />
        </div>

        <div className="flexIconsE">
        <a href="">Save</a>
        </div>

      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
      </div>
      </div>
     </div>
  )
}

export default Images