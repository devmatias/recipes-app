import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/Context';
import '../styles/Login.css';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = () => {
    const characters = 6;
    return password.length > characters;
  };

  const enableButton = () => {
    const teste = !(validateEmail() && validatePassword());
    return teste;
  };
  const history = useHistory();

  const HandleClick = () => {
    const settingEmail = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(settingEmail));
    history.push('/meals');
  };

  return (
    <section className="main-container">
      <form className="login-card">
        <h1>Login</h1>
        <section className="section-text-inputs">
          <input
            placeholder="Email"
            type="email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
            className="input-login"
          />
          <input
            placeholder="Password"
            type="password"
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
            className="input-login"

          />
        </section>
        <section className="submit-btn">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ enableButton() }
            onClick={ HandleClick }
            className="submit-btn"
          >
            Enter
          </button>
        </section>

      </form>
    </section>
  );
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
