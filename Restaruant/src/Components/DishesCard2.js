import React from 'react';
import '../css/dishesCard2.css';
import image1 from '../images/MenuPngs/image 1.png';
import image2 from '../images/MenuPngs/Image 2.png';
import image3 from '../images/MenuPngs/Images3.png';
import image4 from '../images/MenuPngs/Images 4.png';
import image5 from '../images/MenuPngs/Image 5.png';
import image6 from '../images/MenuPngs/Image 6.png';
import image7 from '../images/MenuPngs/Image 7.png';
import image8 from '../images/MenuPngs/Image 8.png';
import image9 from '../images/MenuPngs/Image 9.png';

import Menu from './SearchBox.js';
import SearchBox from './Menu.js';
import Dine from './Dine.js';

const dishes = [
  { id: 1, image: image1, name: "Spicy seasoned seafood noodles", color: "green", para: "20 Bowls available" },
  { id: 2, image: image2, name: "Salted Pasta with mushroom sauce", color: "red", para: "11 Bowls available" },
  { id: 3, image: image3, name: "Beef dumpling in hot and sour soup", color: "red", para: "16 Bowls available" },
  { id: 4, image: image4, name: "Healthy noodle with spinach leaf", color: "red", para: "22 Bowls available" },
  { id: 5, image: image5, name: "Hot spicy fried rice with omelet", color: "red", para: "13 Bowls available" },
  { id: 6, image: image6, name: "Spicy instant noodle with special omelette", color: "green", para: "17 Bowls available" },
  { id: 7, image: image7, name: "Healthy noodle with spinach leaf", color: "red", para: "22 Bowls available" },
  { id: 8, image: image8, name: "Hot spicy fried rice with omelet", color: "red", para: "13 Bowls available" },
  { id: 9, image: image9, name: "Spicy instant noodle with special omelette", color: "green", para: "17 Bowls available" },

]

export default function DishesCard2() {
  return (
    <>

      <SearchBox />
      <Menu />
      <Dine />
      <div className="card-container">

        {dishes.map((dish) => (
          <div key={dish.id} className={`card ${dish.color}`}>
            <img src={dish.image} alt="Spicy seasoned seafood noodles" />
            <h3>{dish.name}</h3>
            <p>{dish.para}</p>
          </div>
        ))}
        
      </div>



    </>
  )
}
