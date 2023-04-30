import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';

export const FooterTag = styled.footer`
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
  justify-content: center;
  gap: 20px;
  width: 100%;
  z-index: 2;
  bottom: 0;
  left: 0;
  padding: 15px;
  position: fixed;
  `;

export const FooterButton = styled.button`
  border: 1px solid #fff;
  background-color: ${(props) => (props.path ? '#79ADDC' : '#FFC09F')};
  padding: 10px;
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