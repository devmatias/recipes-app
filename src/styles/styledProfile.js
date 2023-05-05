import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';

export const HeaderTagProfile = styled.header`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  background-image: 
    linear-gradient(to right bottom,
       rgb(255, 192, 159, 0.5), 
       rgb(255, 192, 159, 0.8)),
       url(${wallpaper});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  padding: 35px 10px;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  position: fixed;
  z-index: 1;
  color: #fff;
`;

export const ButtonsSection = styled.section`
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HeaderButtonProfile = styled.button`
  background-color: #FFC09F;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  img {
    filter: invert();
  }
  :focus {
    color: #79ADDC;
    outline: 0;
  }
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #79ADDC inset;
  }
`;

export const ProfileButtons = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: #fff;
  border: 2px solid #79ADDC;
  border-radius: 8px;
  color: #79ADDC;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding: 16px 25px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;

  :focus {
    color: #79ADDC;
    outline: 0;
  }
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #79ADDC inset;
  }
  `;
