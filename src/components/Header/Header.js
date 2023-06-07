import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavRegistration from '../NavRegistration/NavRegistration';

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <header className="header header__landing">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <NavRegistration />
          </header>
        </>
      }
      />
      <Route path="/movies" element={
        <>
          <header className="header">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <Navigation />
          </header>
        </>
      }
      />
      <Route path="/saved-movies" element={
        <>
          <header className="header">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <Navigation />
          </header>
        </>
      }
      />
      <Route path="/profile" element={
        <>
          <header className="header">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <Navigation />
          </header>
        </>
      }
      />
      <Route path="/profile-edit" element={
        <>
          <header className="header">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <Navigation />
          </header>
        </>
      }
      />
    </Routes>
  )
}

export default Header;