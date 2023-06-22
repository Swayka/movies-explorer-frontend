import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from '../../images/logo.svg'

import Navigation from '../Navigation/Navigation';

const Header = ({loggedIn}) => {
  const location = useLocation().pathname;
  return (
      <header className={location === '/' ? 'header header__blue' : 'header'}>
            <Link to='/' className='header__logo'><img src={mainLogo} alt='Логотип' className='header__logo' /></Link>
            <Navigation loggedIn={loggedIn} />
          </header>
        
  )
}

export default Header;