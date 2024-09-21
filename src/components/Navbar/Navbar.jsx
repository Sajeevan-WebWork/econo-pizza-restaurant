/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Navbar.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";


import images from '../../constants/images'

const Navbar = () =>  {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
  <nav className='app__navbar'>
    <figure className='app__navbar__logo'>
      <img src={images.gericht} alt="logo" />
    </figure>

    <ul className='app__navbar__links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#Contact">Contact</a></li>
    </ul>

    <div className='app__navbar__login'>
      <a href="/" className='p__opensans'>Log In / Register</a>
      <div />
      <a href="/" className='p__opensans'>Book Table</a>
    </div>

    <div className="app__navbar__smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className="app_navbar_smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
        <ul className='app__navbar__smallscreen_links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
);
}
export default Navbar;
