import React from 'react';

function Login() {
  return (
    <section>
      <form>
        <h1>Login</h1>
        <section>
          <input
            placeholder="Email"
            type="email"
            data-testid="email-input"
          />
          <input
            placeholder="Password"
            type="password"
            data-testid="password-input"
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
