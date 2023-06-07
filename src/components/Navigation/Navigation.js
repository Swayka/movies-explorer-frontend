import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  return (
    <nav>
      <ul className='navigation'>
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
      </ul>
      <button className="navigation__burgermenu"></button>
    </nav>
  )
}

export default Navigation;