import React from 'react';
import {Img} from 'react-image'

function PhotoGallery() {
  return (
    <div>



      <div  class='imageContainer'>


        <div class="imageFlex">
          <img src="https://a0.muscache.com/im/pictures/dcde8a25-b336-484a-ab6d-f13d4f93c60e.jpg?im_w=960" height="530" width="450"/>
        </div>

<div class="one">
        <div class="imageFlex">
          <img src="https://a0.muscache.com/im/pictures/cb9bfb23-b0f8-4cd6-ad5e-875b30ba8ff3.jpg?im_w=720" width="350"/>
        </div>


        <div class="imageFlex">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="350"/>
        </div>
</div>

<div class="two">
        <div class="imageFlex">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/6139003d-d69a-40c9-814c-288944c2c94d.jpeg?im_w=720" width="350"/>
        </div>

        <div class="imageFlex">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42894626/original/3ec1ad2d-f82f-4d54-bba9-effa5e5e3112.jpeg?im_w=720" width="350"/>
        </div>
</div>
      </div>

      <input type='button' class="btn" value="Show All Photos"/>
    </div>
  )
}

export default PhotoGallery