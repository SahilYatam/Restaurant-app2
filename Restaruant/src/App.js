import OrderSection from './Components/OrderSection.js';
import Slidebar from './Components/Slidebar.js';
import Homepage from './Components/Homepage.js';
import Eatofy from './Components/Eatofy.js';

import DishesCard from './Components/DishesCard.js';

import OrderComponent from './Components/OrderComponent.js';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Eatofy/>
      <Slidebar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/menu' element={<DishesCard/>} />
        <Route path='/order' element={ <OrderSection/>} />
        <Route path='/payment' element={<OrderComponent/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
