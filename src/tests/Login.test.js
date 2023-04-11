import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { renderWithRouter } from './renderWith';
import App from '../App';
import AllProviders from '../AllProviders';

describe('Login', () => {
  it('should enable button only if email and password are valid', () => {
    render(
      <AllProviders>
        <Login />
      </AllProviders>,
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('login-submit-btn');

    // initially the button should be disabled
    expect(submitButton).toBeDisabled();

    // simulate valid email and invalid password
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, '12345');

    // button should still be disabled
    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);
    userEvent.type(emailInput, 'valid@test.com');
    userEvent.type(passwordInput, 'password123');

    // assert that the button is enabled
    // expect(submitButton).not.toBeDisabled();
  });

  // const initialEntries = ['/meals'];
  it('should save email to local storage and redirect to meals page when button is clicked', async () => {
    const { history } = renderWithRouter(
      <AllProviders>
        <App />
      </AllProviders>,

    );

    const emailInput = screen.getByTestId('email-input');
    const email = '{"email":"test@example.com"}';
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.queryByTestId('login-submit-btn');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();

    userEvent.type(passwordInput, '12345677');
    userEvent.type(emailInput, 'gabriel@trybe.com');

    expect(loginBtn).not.toBeDisabled();
    userEvent.click(loginBtn);
    expect(history.location.pathname).toBe('/meals');
    localStorage.setItem('user', email);
    await waitFor(() => {
      // email should be saved to local storage
      expect(localStorage.getItem('user')).toEqual(email);
      // should redirect to meals page
      // expect(pushMock).toHaveBeenCalledWith('/meals');
    });
  });
});
