import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/Context';
import { Form, Main } from '../styles/styledLogin';

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

  const handleClick = () => {
    const settingEmail = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(settingEmail));
    history.push('/meals');
  };

  return (
    <Main>
      <Form>
        <h1>Sign in</h1>
        <section>
          <input
            placeholder="Email"
            type="email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            placeholder="Password"
            type="password"
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ enableButton() }
            onClick={ handleClick }
          >
            Enter
          </button>
        </section>
      </Form>
    </Main>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
