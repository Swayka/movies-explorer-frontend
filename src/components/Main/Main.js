import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = ({loggedIn}) => {
    return (
        <main className="content">
            <Header loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>

    )
}

export default Main;