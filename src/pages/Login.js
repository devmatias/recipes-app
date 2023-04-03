import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

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
    console.log('entrou');
    const teste = !(validateEmail() && validatePassword());
    console.log(teste);
    return teste;
  };

  return (
    <section>
      <form>
        <h1>Login</h1>
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
        </section>
        <section>
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ enableButton() }
          >
            Enter
          </button>
        </section>
      </form>
    </section>
  );
}

export default Login;
