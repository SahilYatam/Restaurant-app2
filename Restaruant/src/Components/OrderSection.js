import React from 'react';
import '../css/orderSection.css';
import image1 from '../images/MenuPngs/image 1.png';
import image2 from '../images/MenuPngs/Image 2.png';
import image3 from '../images/MenuPngs/Images3.png';
import image4 from '../images/MenuPngs/Images 4.png';
import deleteBtn from '../images/payment png/Trash.png';
import backArrow from '../images/payment png/Back.png';

import DishesCard2 from './DishesCard2.js';
import { Link } from 'react-router-dom';

const orderData = [
  { id: 1, image: image1, name: "Spicy seasoned sea...", originalPrice: 399, discountedPrice: 199, qty: 2, note: "Please, just a little bit spicy only." },
  { id: 2, image: image2, name: "Salted pasta with mu...", originalPrice: 199, discountedPrice: 179, qty: 1, note: "Order Note..." },
  { id: 3, image: image3, name: "Spicy instant noodle...", originalPrice: 500, discountedPrice: 180, qty: 3, note: "Order Note..." },
  { id: 4, image: image4, name: "Healthy noodle with ...", originalPrice: 299, discountedPrice: 189, qty: 1, note: "Order Note..." },
];

const OrderItem = ({ order }) => (
  <div className="order-item">
    <img src={order.image} alt={order.name} className='dishesPng' />
    <div className="item-info">
      <p className="item-name">{order.name}</p>
      <p className="item-price">Rs {order.originalPrice}</p>
      <p className="item-price2">Rs {order.discountedPrice}</p>
    </div>
    <p className="item-qty">{order.qty}</p>
    <input type="text" className="order-note" placeholder={order.note} />
    <Link to="/menu" style={{ textDecoration: "none" }}>
      <button className="delete-btn"><img src={deleteBtn} alt="Delete Icon" className='deleteIcon' /></button>
    </Link>
  </div>
);

export default function OrderSection() {
  return (
    <>
      <DishesCard2 />
      <div className="order-container">
        <div className='backArrow'>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <img src={backArrow} alt="back icon" />
          </Link>
        </div>
        <h3 className='order-title'>Order #34562</h3>
        <div className="tabs">
          <button className="tab">Dessert</button>
          <button className="tab">To Go</button>
          <button className="tab active">Delivery</button>
        </div>
        <div className='qtyPrice'>
          <p className='itemTag'>Item</p>
          <span className='qtyTag'>Qty</span>
          <span className='priceTag'>Price</span>
        </div>
        <hr className='firstHrLine' />
        <div className="order-list">
          {orderData.map(order => <OrderItem key={order.id} order={order} />)}
        </div>
        <hr className='line' />
        <div className="order-summary-tag">
          <p className="discount">Discount: <span>Rs 200</span></p>
          <p className="subtotal">Sub total: <span>Rs 1,099</span></p>
        </div>
        <div className="button-actions">
          <Link to="/payment">
            <button className="save-btn">SAVE</button>
          </Link>
          <Link to="/payment">
            <button className="pay-btn">PAY</button>
          </Link>
        </div>
      </div>
    </>
  );
}
