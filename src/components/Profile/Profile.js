import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormWithValidation } from "../../utils/validation";


function Profile({ loggedIn, onSignOut, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();

        if (!isValid) {
            console.log(errors);
        } else {
            onUpdateUser({
                name: values.name,
                email: values.email,
            });
        }
    }

    React.useEffect(() => {
        currentUser ? resetForm(currentUser) : resetForm();
    }, [currentUser, resetForm]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <fieldset className='profile__fieldset' name='signup'>
                        <label className='profile__label'>
                            <span className='profile__value'>Имя</span>
                            <input type='text' name='name' className='profile__form-item' placeholder='Имя' onChange={handleChange}
                                value={values.name || ''} minLength='2'
                                maxLength='30'  required />
                            <span id='profile-error' className='profile__error'>{errors.name}</span>
                        </label>
                        <div className='profile__line'></div>
                        <label className='profile__label'>
                            <span className='profile__value'>E-mail</span>
                            <input type='email' name='email' className='profile__form-item' placeholder='E-mail' onChange={handleChange}
                                value={values.email || ''} required />
                            <span id='profile-error' className='profile__error'>{errors.email}</span>
                        </label>
                    </fieldset>
                    <button className={!isValid || (currentUser.name === values.name && currentUser.email === values.email) ? 'profile__button-edit_error' : 'profile__button-edit'}
                        disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)}
                        type='submit'>Редактировать</button>
                    <button className='profile__button-exit' type='button' onClick={onSignOut} >Выйти из аккаунта</button>
                </form>
            </section>
        </>
    );
}

export default Profile;