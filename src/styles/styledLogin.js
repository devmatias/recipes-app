import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 40px 80px;
  margin: 20px;

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 50px;
    margin-bottom: 10px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      height: 40px;
      min-width: 300px;
      border-radius: 10px;
      border: none;
      padding: 5px;
    }
    
    input:focus {
      outline: none;
    }

    button {
      align-self: center;
      width: 50%;
      height: 35px;
      border-radius: 10px;
      padding: 4px;
      border: none;
      background-color: rgb(189, 187, 176);
      color: rgb(53, 53, 53);
      font-size: 16px;
    }
    
    button:disabled {
      background-color: rgba(138, 137, 124, 0.5);
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
