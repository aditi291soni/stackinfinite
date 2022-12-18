import { CallTracker } from 'assert';
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Fullnav from './Component/Fullnav';
import Cart from './Component/Cart';
import Singleitem from './Component/Singleitem';
import CategorySingle from './Component/CategorySingle';
import TopNavbar from './Component/TopNavbar';
import ErrorNotfound from './Component/ErrorNotfound';

const App = () => {
  return (
    <>
    <TopNavbar/>
    <Routes>
      <Route path='/' element={<Fullnav/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/single/:id' element={<Singleitem/>}/>
      <Route path='/*' element={<ErrorNotfound/>}/>
      </Routes>
  
    </>
  )
}

export default App
