import React from 'react';
import NavTab from '../NavTab/NavTab';

const Promo = (props) => {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__img'></div>
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>

            <NavTab />
        </section>
    )
}

export default Promo;