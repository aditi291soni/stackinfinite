import React from 'react'
import {Link} from 'react-router-dom'
// import css from "./TopNavbar.module.css"
import css from './css/TopNavbar.module.css'
const TopNavbar = () => {

  return (
    <>
      <div className={css.container} >
        <div className={css.left}>
            <div className={css.logo}>
        <i className="ri-truck-fill"></i>
            </div>
            <div className={css.header}>
                Apna Store
            </div>
            <div className={css.search}>
                <input className={css.searchinput} type="text" placeholder="Search for Products " >
                    {/* <i className="ri-search-line"></i> */}
                </input>
            </div>

        </div>
        <Link to="/cart">
        <div className={css.right}>
            <i className="ri-shopping-cart-fill"></i>
            
        </div>
        </Link>
      </div>
    </>
  )
}

export default TopNavbar
