import React, { useState } from 'react';
import './header.css';
import img from './chel.svg';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <div className='header'>
      <div className="container">
        <div className="header-chart">
          <div className="header-inner">
            <NavLink to="/" className="logo">LOGO</NavLink>
            <a href="#!" className="nav__link1"></a>
            <nav className="navbar">
              <div className="nav__link" onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
                MENU
                {isDropdownOpen1 && (
                  <div className="dropdown-menu">
                    <a href="#!">Item 1</a>
                    <a href="#!">Item 2</a>
                    <a href="#!">Item 3</a>
                  </div>
                )}
              </div>
              <a href="#!" className="nav__link" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                MENU
                {isDropdownOpen2 && (
                  <div className="dropdown-menu">
                    <a href="#!">Item 1</a>
                    <a href="#!">Item 2</a>
                    <a href="#!">Item 3</a>
                  </div>
                )}
              </a>
              <a href="#!" id='line-1' className="nav__link">CLUBS</a>
            </nav>
          </div>
          <div className="header-inner2">
            <nav className='navbar2'>
              {
                props.auth.userData.length === 0 ? <NavLink id='line-2' to="/login" className='nav__link2'>LOGIN | REGISTER</NavLink> : <NavLink id='line-2' to="/profile" className='nav__link2'>{props.auth.data.first_name} {props.auth.data.last_name}</NavLink>
              }
              <a href="./" className='nav__link2'><img src={img} alt="" /></a>
            </nav>
          </div>
        </div>
      </div>
    </div >
  );
}