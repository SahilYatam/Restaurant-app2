import React from 'react';
import '../css/homepage.css'
import restaurantImg from '../images/Homepage/Restaurant.png';
import logo1 from '../images/Homepage/takeaway.png';
import logo2 from '../images/Homepage/Motorcycle .png';
import logo3 from '../images/Homepage/zomato.png';
import logo4 from '../images/Homepage/swiggy.png';

import { Link } from "react-router-dom";

const tables = [
  { id: 1, name: "Table T1", color: "table-t1"},
  { id: 2, name: "Table T2", color: "table-t2"},
  { id: 3, name: "Table T3", color: "table-t3"},
  { id: 4, name: "Table T4", color: "table-t4"},
  { id: 5, name: "Table T5", color: "table-t5"},
  { id: 6, name: "Table T6", color: "table-t6"},
  { id: 7, name: "Table T7", color: "table-t7"},
  { id: 8, name: "Table T8", color: "table-t8"},
  { id: 9, name: "Table T9", color: "table-t9"},
  { id: 10, name: "Table T10", color:"table-t10"},
  { id: 11, name: "Table T11", color:"table-t11"},
  { id: 12, name: "Table T12", color:"table-t12"}
];
const Homepage = () => {

  return (
    <>
      <div className="homepage">
        <h1>RESTAURANT <img src={restaurantImg} alt="restaurant" /></h1>
      </div>

      <div className="logo-container">
        <div className="rectangle">
          <img src={logo1} alt="TakeAway" className="logo" />
          <p className="textForLogo">TakeAway</p>
        </div>
        <div className="rectangle">
          <img src={logo2} alt="Delivery" className="logo" />
          <p className="textForLogo">Delivery</p>
        </div>
        <div className="rectangle">
          <img src={logo3} alt="Zomato" className="logo" />
          <p className="textForLogo">Zomato</p>
        </div>
        <div className="rectangle">
          <img src={logo4} alt="Swiggy" className="logo" />
          <p className="textForLogo">Swiggy</p>
        </div>
      </div>

      <div className="square-container-logo">
        <div className="square-container">
          <div className="square-item">
            <span className="square-color" style={{ backgroundColor: '#ffff00' }}></span>
            <span className="booked-text">BOOKED</span>
          </div>
          <div className="square-item">
            <span className="square-color" style={{ backgroundColor: '#d3d3d3' }}></span>
            <span className="mergeTable-text">MERGE TABLE</span>
          </div>
          <div className="square-item">
            <span className="square-color" style={{ backgroundColor: '#05e805' }}></span>
            <span className="payment-text">PAYMENT</span>
          </div>
          <div className="square-item">
            <span className="square-color" style={{ backgroundColor: '#ff0000' }}></span>
            <span className="reservation-text">RESERVATION</span>
          </div>
        </div>
      </div>

      <div className="empty-rectangle"><p className="empty-text"></p></div>

      {/* table boxes */}
      <div className="boxes-container">
        {tables.map((table) => (
          <div  key={table.id} className="table-container">
            <Link to="/menu" style={{ textDecoration: 'none', color: 'black' }}>
              <div className={`table-icon ${table.color}`}>
                <div className="table-name">{table.name}</div>
                <div className={`table-line`}></div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="empty-rectangle empty-rectangle2"><p className="empty-text empty-text2">First Floor</p></div>

      {/* table boxes */}
      <div className="boxes-container boxes-container2">
        {tables.map((table) => (
          <div key={table.id} className="table-container">
            <Link to="/menu" style={{ textDecoration: 'none', color: 'black' }}>
              <div className={`table-icon ${table.color} `}>
                <div className="table-name">{table.name}</div>
                <div className={`table-line`}></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
