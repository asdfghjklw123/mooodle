import React, { useState } from 'react';
import './header.css';
import img from './chel.svg';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };


  return (
    <div className='header'>
      <div className="container">
        <div className="header-chart">
          <div className="header-inner">
            <NavLink to="/" className="logo">ЛОГОТИП</NavLink>
            <a href="#!" className="nav__link1"></a>
            <nav className="navbar">
              <div className="nav__link" onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
                МЕНЮ
                {isDropdownOpen1 && (
                  <div className="dropdown-menu">
                    <NavLink to="/grades">Оценки</NavLink>
                    <NavLink to='/journal'>Журнал</NavLink>
                    <NavLink to='/course'>Курсы</NavLink>
                    <NavLink >Mark</NavLink>
                    <NavLink to='/profile'>Профиль</NavLink>
                  </div>
                )}
              </div>
              <NavLink to="/clubs" id='line-1' className="nav__link">КЛУБЫ</NavLink>
            </nav>
          </div>
          <div className="header-inner2">
            <nav className='navbar2'>
              {
                props.auth.userData.length === 0 ?
                  <>
                    <NavLink id='line-2' to="/login" className='nav__link2'>ВХОД |</NavLink>

                    <NavLink id='line-2' to="/register" className='nav__link2'>РЕГИСТРАЦИЯ</NavLink>
                  </> :
                  <NavLink id='line-2' to="/profile" className='nav__link2'>{props.auth.data.first_name} {props.auth.data.last_name}</NavLink>
              }
              <a href="./" className='nav__link2'><img src={img} alt="" /></a>
            </nav>
          </div>
        </div>
      </div>
    </div >
  );
}