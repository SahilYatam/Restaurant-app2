import React from 'react'
import '../css/menu.css';

const dishesNames = [
  {id: 1, name: "Veg"}, 
  {id: 2, name: "Soup"}, 
  {id: 3, name: "Noodles"}, 
  {id: 4, name: "Rice"}, 
  {id: 5, name: "Rice"}, 
  {id: 6, name: "Dessert"}, 
  {id: 7, name: "South-Indian"}, 
  {id: 8, name: "Dessert"}, 
  {id: 9, name: "Dessert"}, 
  {id: 10, name: "Dessert"}, 
  {id: 11, name: "Dessert"}
]

export default function Menu() {
  return (
    <>
      <div className="names-container">
        <span className='dish-names' style={{ color: "red" }}>Non-Veg</span>
        {
          dishesNames.map((dish)=>(
            <span key={dish.id} className='dish-name'>{dish.name}</span>
          ))
        }

        {/* <span className='dish-names'>Veg</span>
        <span className='dish-names'>Soup</span>
        <span className='dish-names'>Noodles</span>
        <span className='dish-names'>Rice</span>
        <span className='dish-names'>Rice</span>
        <span className='dish-names'>Dessert</span>
        <span className='dish-names'>South-Indian</span>
        <span className='dish-names'>Dessert</span>
        <span className='dish-names'>Dessert</span>
        <span className='dish-names'>Dessert</span>
        <span className='dish-names'>Dessert</span> */}
      </div>
      <hr className='gray-line' />
    </>
  )
}
