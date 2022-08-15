import React from "react";

import {FaHeart} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className="copyright">
          <span> ©2022. Designed & Developed by <a href="https://www.harijoshi.tech/">'Hari Joshi'</a>  with <span className="heart"><FaHeart/></span>. </span>
        </div>
    </footer>
  );
}

export default Footer;
