import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import gIcon from '../assets/static/google-icon.png';
import tIcon from '../assets/static/twitter-icon.png';
import Header from '../components/Header';

import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  };
  return (
    <>
    <Header isLogin/>
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='login__container--input'
            type='text'
            autoComplete='username'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='login__container--input'
            type='password'
            autoComplete='current-password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={gIcon} alt='goggle' />
            Iniciar sesión con Google
          </div>
          <div>
            <img src={tIcon} alt='twitter' />
            Iniciar sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta?
          <Link to='/register'>
            <span>Registrate</span>
          </Link>
        </p>
      </section>
    </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
