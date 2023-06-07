import React from "react";
import { Link } from 'react-router-dom';
import FormLogin from '../FormLogin/FormLogin'

function Login(props) {
  return (
    <section className="loginform">
      <div className="loginform__container">
      <Link to="/">
        <div className="loginform__logo"></div>
      </Link>
        <h2 className="loginform__heading">{props.title}</h2>
        {
          <FormLogin submitValue={props.submitValue}/>
        }
      </div>
      <div className='loginform__question'>
        <p className='loginform__question-text'>{props.question}</p>
          <Link to="/signup" className='loginform__link'>{props.link}</Link>
      </div> 
    </section>
  )
}

export default Login;