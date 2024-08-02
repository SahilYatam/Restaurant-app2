import React from "react";
import "../css/orderComponent.css";
import backArrow from "../images/payment png/Back.png";

import DishesCard2 from "./DishesCard2.js";
import { Link } from "react-router-dom";

const orderData = [
  { id: 1, name: "Spicy seasoned sea...", qty: 2, rs: 399, para: "Please, just a little bit spicy only.", button: "x" },
  { id: 2, name: "Salted pasta with mu...", qty: 1, rs: 179, button: "x" },
  { id: 3, name: "Spicy instant noodle...", qty: 3, rs: 380, button: "x" },
  { id: 4, name: "Healthy noodle with ...", qty: 1, rs: 189, button: "x" }
]

const OrderComponent = () => {
  return (
    <>
      <DishesCard2 />
      <div className="container">
        <div>
          <Link to="/order"> <img src={backArrow} alt="" style={{ cursor: "pointer" }} /> </Link>
        </div>
        <div className="confirmation-section">
          <h2 className="confirmation-text">Confirmation</h2>
          <div className="order-summary">
            {
              orderData.map((orderDetails) => (
                <div key={orderDetails.id} className="order-item-list">
                  <div className="item-details">
                    <span>{orderDetails.name}</span>
                    <span>Qty {orderDetails.qty}</span>
                    <span>Rs {orderDetails.rs}</span>
                    <span>{orderDetails.para}</span>
                  </div>
                  <button>{orderDetails.button}</button>
                </div>
              ))
            }
          </div>
        </div>

        <div className="payment-section">
          <h2>Payment</h2>
          <div className="payment-methods">
            <button className="payment-method">Credit Card</button>
            <button className="payment-method">Cash</button>
            <button className="payment-method">UPI Payment</button>
          </div>
          <div className="payment-form">
            <div>
              <label>Cardholder Name</label>
              <input type="text" placeholder="Invincible Mikey" />
            </div>
            <div>
              <label>Card Number</label>
              <input type="text" placeholder="2564 1421 0897 1244" />
            </div>
            <div className="expiry-cvv">
              <div>
                <label>Expiration Date</label>
                <input type="text" placeholder="02/2024" />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder="•••" />
              </div>
            </div>
            <div>
              <label>Order Type</label>
              <select>
                <option>Dine In</option>
                <option>Take Away</option>
              </select>
            </div>
            <div>
              <label>Table no.</label>
              <input type="text" placeholder="140" />
            </div>
            <div className="payment-actions">
              <Link to="/order"> <button className="cancel-btn">Cancel</button> </Link>
              <Link to="/order"> <button className="confirm-btn">Confirm Payment</button> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComponent;
