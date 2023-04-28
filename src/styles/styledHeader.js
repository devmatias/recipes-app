import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';

export const HeaderTag = styled.header`
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
  position: fixed;
  width: 100%;
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  background-color: #FFC09F;
  padding: 15px;
  border: none;
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

export const SearchInput = styled.input`
  border: 1px solid greenyellow;
  border-radius: 10px;
  height: 40px;
  padding: 5px;
  min-width: 400px;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;

export const RadioInput = styled.div`
  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    column-gap: 10px;
    margin-left: 10px;

    input[type='radio'] {
      display: none;
    }

    div { 
      border: 1px solid #fff;
      width: 30px;
      height: 30px;
      display: grid;
      place-content: center;
      border-radius: 50%;
      transition: 0.5s ease;
      color: #fff;
      span {
        content: '';
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 50%;
      }
    }
    span {
      transition: 0.5s ease;
      color: #fff;
    }
    input[type='radio']:checked + div {
      border-color: #79ADDC;
    }
    input[type='radio']:checked + div span {
      background: #79ADDC;
    }
  }

`;

export const SearchButton = styled.button`
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
  margin-left: 20px;

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
