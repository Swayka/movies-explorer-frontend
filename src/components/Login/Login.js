import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import mainLogo from '../../images/logo.svg'
import { useFormWithValidation } from "../../utils/validation";

function Login({ onLogin }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!isValid) {
            console.log(errors);
        }
        onLogin(values);
    }

    return (
        <>
            <section className='login'>
                <div className='login__header'>
                    <Link to='/'><img src={mainLogo} alt='Логотип' className='login__logo' /></Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <form className='login__form' onSubmit={handleSubmit}>
                    <fieldset className='login__fieldset' name='signup'>
                        <label className='login__label'>
                            <span className='login__value'>E-mail</span>
                            <input type='email' name='email' className='login__form-item' placeholder='E-mail' onChange={handleChange} required />
                            <span id='login-error' className='login__error'>{errors.email}</span>
                        </label>
                        <label className='login__label'>
                            <span className='login__value'>Пароль</span>
                            <input type='password' name='password' className='login__form-item' placeholder='Пароль' onChange={handleChange} required />
                            <span id='login-error' className='login__error'>{errors.password}</span>
                        </label>
                    </fieldset>
                    <button className={!isValid ? 'login__button_error' : 'login__button'} type='submit'>Войти</button>
                    <p className='login__text'>Ещё не зарегистрированы? <Link to='/signup' className='login__text-link'>Регистрация</Link></p>
                </form>
            </section>
        </>
    );
}

export default Login;