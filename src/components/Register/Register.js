import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Register.css';
import mainLogo from '../../images/logo.svg'
import { useFormWithValidation } from "../../utils/validation";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      console.log(errors);
    } else {
      onRegister({
        name: values.profilename,
        email: values.email,
        password: values.password,
      });
    }
  }
  
  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className='register'>
        <div className='register__header'>
          <Link to='/'><img src={mainLogo} alt='Логотип' className='register__logo' /></Link>
          <h1 className='register__title'>Добро пожаловать!</h1>
        </div>
        <form className='register__form' onSubmit={handleSubmit} noValidate>
          <fieldset className='register__fieldset' name='signup'>
            <label className='register__label'>
              <span className='register__value'>Имя</span>
              <input type='text' name='profilename' className='register__form-item' placeholder='Имя' onChange={handleChange} minLength='2'
                maxLength='30' pattern="[A-Za-zА-Яа-яЁё\- ]+" required />
              <span id='register-error' className='register__error'>{errors.profilename}</span>
            </label>
            <label className='register__label'>
              <span className='register__value'>E-mail</span>
              <input type='email' name='email' className='register__form-item' placeholder='E-mail' onChange={handleChange} required />
              <span id='register-error' className='register__error'>{errors.email}</span>
            </label>
            <label className='register__label'>
              <span className='register__value'>Пароль</span>
              <input type='password' name='password' className='register__form-item' placeholder='Пароль' onChange={handleChange} required />
              <span id='register-error' className='register__error'>{errors.password}</span>
            </label>
          </fieldset>
          <button className={!isValid ? 'register__button_error' : 'register__button'} type='submit'>Зарегистрироваться</button>
          <p className='register__text'>Уже зарегистрированы? <Link to='/signin' className='register__text-link'>Войти</Link></p>
        </form>
      </section>
    </>
  );
}

export default Register;