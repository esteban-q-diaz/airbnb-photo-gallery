import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PhotoGallery({ searchMenu }) {
  return (
    <div>
      <div className="imageContainer">
        <div className="imageFlex ">
          <img className="leftImg" src="https://airbnb-clone-2021.s3-us-west-1.amazonaws.com/airbnb_fakeImg_left.png?im_w=960" height="530" width="450" alt="missing" />
        </div>

        <div className="one">
          <div className="imageFlex">
            <img src="https://images.unsplash.com/photo-1611212863924-39ea8f8b7f1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80?im_w=720" width="371" alt="missing" />
          </div>

          <div className="imageFlex">
            <img src="https://images.unsplash.com/photo-1600221582796-2355f57762a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2704&q=80?im_w=720" width="371" alt="missing" />
          </div>
        </div>

        <div className="two">
          <div className="imageFlex">
            <img className="rightTopImg" src="https://images.unsplash.com/photo-1598924957326-0446ac30341e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80?im_w=720" width="371.5" alt="missing" />
          </div>

          <div className="imageFlex">
            <img className="rightBottomImg" src="https://images.unsplash.com/photo-1576302769468-63842682833e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80?im_w=720" width="371.5" alt="missing" />
          </div>
        </div>
      </div>
      <div className="show-more-imgs">
      <Link to="/images">
        <input type="submit" className={`btn btn-${searchMenu}`} value="Show All Photos" />
      </Link>
      </div>

    </div>
  );
}

PhotoGallery.propTypes = {
  searchMenu: PropTypes.instanceOf(Object).isRequired,
};

export default PhotoGallery;
