import React from 'react';
import './InfoMessagePopup.css';

function InfoMessagePopup({ message, isOpen, onClose }) {
    return (
        <div className={`infoPopup ${isOpen ? 'infoPopup_opened' : ''}`}>
            <div className='infoPopup__container'>
                <button className='infoPopup__close' type='button' onClick={onClose}></button>
                <div className='infoPopup__body'>
                <p className='infoPopup__message'>{`${message}`}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoMessagePopup;