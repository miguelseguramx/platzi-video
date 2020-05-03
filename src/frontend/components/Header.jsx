import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import PlatziLogo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icon-user.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const HeaderClass = classNames('header', {
    isLogin,
    isRegister,
  });
  const handleLogout = (e) => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    props.logoutRequest({});
    window.location.href = '/login';
  };
  return (
    <header className={HeaderClass}>
      <Link to='/'>
        <img className='header__img' src={PlatziLogo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' /> }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> : null}
          {hasUser ?
            <li><a href='/' onClick={handleLogout}>Cerrar Sesión</a></li> :
            <li><Link to='/login'>Iniciar Sesion</Link></li>}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// mapStateToProps sirve para traer y va en el primer argumento
// mapDispatchToProps srive para llevar dataos al estado
