import React, { useRef } from 'react';
import '../css/slidebar.css'
import vector from '../images/Slidebar/Vector.png';
import home from '../images/Slidebar/Home.png'
import vector1 from '../images/Slidebar/Vector (1).png';
import vector2 from '../images/Slidebar/Vector (2).png';
import vector3 from '../images/Slidebar/Vector (3).png';
import vector4 from '../images/Slidebar/Vector (4).png';
import vector5 from '../images/Slidebar/Vector (5).png';
import chef from '../images/Slidebar/Chef.png';
import group from '../images/Slidebar/Group.png';
import navIcon from '../images/Slidebar/navicon.png'
import { Link } from 'react-router-dom';


function Slidebar() {

  const menuRef = useRef(null);

  const navbar_toggle = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('nav-menu-visible');
    }
  };

  return (
    <>
      <img onClick={navbar_toggle} className='showNavbar' src={navIcon} alt="navIcon" />
      <nav ref={menuRef} className="slidebar">
        <ul>
          <li className='imgages'><Link to='/' className='image-button'><img src={vector} alt='Image1' /></Link></li>
          <li className='imgages home-img'><Link to='/' className='image-button'><img src={home} alt='Image2' /></Link></li>
          <li className='imgages'><Link to='/menu' className='image-button'><img src={vector1} alt='Image3' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={vector2} alt='Image4' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={chef} alt='Image5' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={group} alt='Image6' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={vector5} alt='Image7' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={vector3} alt='Image8' /></Link></li>
          <li className='imgages'><Link to='#' className='image-button'><img src={vector4} alt='Image9' /></Link></li>
        </ul>

      </nav>
    </>
  );

}

export default Slidebar;


