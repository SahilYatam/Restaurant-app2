import React from 'react';
import { Link } from 'react-router-dom';
import '../css/dishesCard.css';
import image1 from '../images/MenuPngs/image 1.png';
import image2 from '../images/MenuPngs/Image 2.png';
import image3 from '../images/MenuPngs/Images3.png';
import image4 from '../images/MenuPngs/Images 4.png';
import image5 from '../images/MenuPngs/Image 5.png';
import image6 from '../images/MenuPngs/Image 6.png';
import image7 from '../images/MenuPngs/Image 7.png';
import image8 from '../images/MenuPngs/Image 8.png';
import image9 from '../images/MenuPngs/Image 9.png';
import image10 from '../images/MenuPngs/Image 10.png';
import image11 from '../images/MenuPngs/Image 11.png';
import image12 from '../images/MenuPngs/Image 12.png';
import image13 from '../images/MenuPngs/Image 13.png';
import image14 from '../images/MenuPngs/Image 14.png';
import image15 from '../images/MenuPngs/image 15.png';
import Menu from './Menu';
import SearchBox from './SearchBox';
import Dine from './Dine';

const dishes = [
  { id: 1, image: image1, name: 'Spicy seasoned seafood noodles', color: 'green' },
  { id: 2, image: image2, name: 'Salted Pasta with mushroom sauce', color: 'red' },
  { id: 3, image: image3, name: 'Beef dumpling in hot and sour soup', color: 'red' },
  { id: 4, image: image4, name: 'Healthy noodle with spinach leaf', color: 'red' },
  { id: 5, image: image5, name: 'Hot spicy fried rice with omelet', color: 'red' },
  { id: 6, image: image6, name: 'Spicy instant noodle with special omelette', color: 'green' },
  { id: 7, image: image7, name: 'Healthy noodle with spinach leaf', color: 'red' },
  { id: 8, image: image8, name: 'Hot spicy fried rice with omelet', color: 'red' },
  { id: 9, image: image9, name: 'Spicy instant noodle with special omelette', color: 'green' },
  { id: 10, image: image10, name: 'Healthy noodle with spinach leaf', color: 'green' },
  { id: 11, image: image11, name: 'Hot spicy fried rice with omelet', color: 'red' },
  { id: 12, image: image12, name: 'Spicy instant noodle with special omelette', color: 'green' },
  { id: 13, image: image13, name: 'Spicy seasoned seafood noodles', color: 'red' },
  { id: 14, image: image14, name: 'Spicy seasoned seafood noodles', color: 'red' },
  { id: 15, image: image15, name: 'Spicy instant noodle with special omelette', color: 'red' },
];

export default function DishesCard() {

  return (
    <>
      <SearchBox />
      <Menu />
      <Dine />
      <div className="card-container">
        {dishes.slice(0, 9).map((dish) => (
          <Link key={dish.id} to="/order" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={`card ${dish.color}`} >
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className='second-container'>
        {dishes.slice(9).map((dish) => (
          <Link key={dish.id} to="/order" style={{ textDecoration: 'none', color: 'black' }}>
            <div className={`card ${dish.color}`}>
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
