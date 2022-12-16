import { CallTracker } from 'assert';
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Fullnav from './Component/Fullnav';
import Cart from './Component/Cart';
import Singleitem from './Component/Singleitem';
import CategorySingle from './Component/CategorySingle';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Fullnav/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/single' element={<Singleitem/>}/>
      </Routes>
  
    </>
  )
}

export default App
