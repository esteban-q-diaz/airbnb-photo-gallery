import React, { useState } from 'react';
import {AiTwotoneStar} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
// import { Link } from 'react-router-dom';

function Images( { showGallery } ) {
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  return (

    <div className="imagesContainer">

      <div className="flexIcons">
      <div className="flexIconsA">
        {/* <Link to='/'> */}
        <IoIosArrowBack onClick={()=>{showGallery()}} size={25}/>
      {/* </Link> */}




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
        <img src="https://a0.muscache.com/im/pictures/dcde8a25-b336-484a-ab6d-f13d4f93c60e.jpg?im_w=1200" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/cb9bfb23-b0f8-4cd6-ad5e-875b30ba8ff3.jpg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/6139003d-d69a-40c9-814c-288944c2c94d.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/10ff85e1-0d57-4773-a435-42df1f7665af.jpeg?im_w=1200" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/c9988673-7e2a-4c80-b4e1-0025f08a68ab.jpeg?im_w=720" width="420"/>
      </div>
      </div>

      <div imgFlex1>
        <div className='imgFlex1a'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/a6aa5f6f-8481-404c-a97d-f9120a50cd43.jpeg?im_w=1200" width="850"/>
        </div>

      <div className='imgFlex1a'>
        <img className="leftImage" src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/8c775b39-652e-44ce-b203-ad1a53532b08.jpeg?im_w=720" width="420"/>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/84506874-d7c2-47dc-952d-56bf38c240ff.jpeg?im_w=720" width="420"/>
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