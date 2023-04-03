import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';


function Login() {

const {
   setEmail,
   setPassword,
   } = useContext(AppContext)
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
          >
            Enter
          </button>
        </section>
      </form>
    </section>
  );
}

export default Login;
