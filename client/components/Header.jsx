import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Header({ airbnbSite }) {
  return (
    <div>
      <div className="header">
        <h1>{airbnbSite[0].title}</h1>
      </div>
      <div className="flex">
        <div className="star">
          <AiTwotoneStar color="red" />
        </div>

        <div className="header-1">
          <p>
            {`${airbnbSite[0].ratingAverage} (${airbnbSite[0].reviews}) `}
            ·
          </p>
        </div>

        <div className="header-2">
          <p>
            {airbnbSite[0].status}
            ·
          </p>
        </div>

        <div className="header-3">
          <a href="https://www.airbnb.com/">
            {airbnbSite[0].location}
          </a>
        </div>

        <div className="flexTwo">
          <div className="header-4">
            <a href="https://www.airbnb.com/" className="share">Share</a>
          </div>

          <div className="saveIcon">
            <FiShare className="saveIcon" size={15} />
          </div>
        </div>

        <div className="header-5">
          <a href="https://www.airbnb.com/">Save</a>
        </div>

        <div className="shareIcon">
          <BsHeart className="shareIcon" size={15} />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  airbnbSite: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
