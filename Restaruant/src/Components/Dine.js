import React from 'react';
import dropdownicon from '../images/MenuPngs/arrow-ios-down.png';
import '../css/dine.css';

export default function Dine() {
  return (
    <>
      <div className='TextBox'>
        <p className='titleText'>Choose Dishes</p>
      </div>
    <div className='box'>
      <img src={dropdownicon} alt="icon" className='downIcon'/>
      <p className='text'>Dine In</p>
    </div>
    </>
  )
}
