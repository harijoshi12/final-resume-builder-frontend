import React from 'react'

const FooterAnimation = () => {
  return (
    <svg className="footerSmallBg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="245" viewBox="15 -15 768 395" fill="none">
      <g filter="url(#filter0_d_669_14)">
        <path className='second' d="M15 138.5C15 138.5 71 18.0002 283.5 18C557.5 17.9998 783 189 783 189V374.999H15V138.5Z" fill="black" />
      </g>
      <defs>
        <filter id="filter0_d_669_14" x="0" y="0.499756" width="798" height="394.499" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_669_14" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_669_14" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default FooterAnimation

