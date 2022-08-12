import React from "react";

import myPic from '../../media/images/dp.png'

import {FaFacebookF} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import FooterAnimation from "./FooterAnimation";
function Footer() {
  return (
    <footer>
      <FooterAnimation/>
      <div className="content">
        <div className="imgbox" style={{backgroundImage:`url(${myPic})`}}></div>
        <div className="myName">Hari Joshi</div>
        <div className="socialIcons">
          <span><FaGithub/></span>
          <span><FaLinkedinIn/></span>
          <span><FaFacebookF/></span>
          <span><FaTwitter/></span>
          <span><FaYoutube/></span>
          <span><FaInstagramSquare/></span>
        </div>
      </div>
        <div className="copyright">
          <span> ©2022. Designed & Developed by 'me' with <span className="heart"><FaHeart/></span>. </span>
        </div>
    </footer>
  );
}

export default Footer;
