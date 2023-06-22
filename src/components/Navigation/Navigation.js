import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ loggedIn }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <nav>
      <ul className='navigation'>
        {loggedIn ? (
          <>
            <li className='navigation-element'>
              <Link to='/movies' className="navigation-link">Фильмы</Link>
            </li>
            <li className='navigation-element'>
              <Link to='/saved-movies' className="navigation-link">Сохраненные фильмы</Link>
            </li>
            <li>
              <div className="navigation__profile">
                <Link to='/profile' className="header__signup-link">Аккаунт</Link>
                <Link to="/profile">
                  <button className="navigation__profile-logo"></button>
                </Link>
              </div>
            </li>
          </>
        ) : (
          <ul className="navregistration">
            <li>
              <Link to='/signup' className="navregistration__signup-link">Регистрация</Link>
            </li>
            <li>
              <button className="navregistration__signin" type="button">
                <Link to='/signin' className="navregistration__signin-button">Войти</Link>
              </button>
            </li>
          </ul>
        )}

        {!isPopupOpen ? (
          <button className={loggedIn ? 'navigation__burgermenu' : 'navigation__burgermenu_close'} onClick={togglePopup}></button>
        ) : <BurgerMenu onClose={togglePopup} />
        }
      </ul>
    </nav>
  )
}

export default Navigation;