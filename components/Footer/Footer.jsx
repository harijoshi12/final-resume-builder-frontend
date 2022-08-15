import React from "react";

import myPic from '../../media/images/dp.png'

import {FaHeart} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className="copyright">
          <span> ©2022. Designed & Developed by 'me' with <span className="heart"><FaHeart/></span>. </span>
        </div>
    </footer>
  );
}

export default Footer;
