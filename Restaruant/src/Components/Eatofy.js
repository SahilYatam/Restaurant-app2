import React from 'react';
import '../css/eatofy.css';

import { Link } from 'react-router-dom';

export default function Eatofy() {
  return (
    <>
      <Link to="/" style={{textDecoration: 'none'}}><p className='eatofy'>EATOFY</p></Link>
    </>
  )
}
