import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';

export const HeaderTagDRecipes = styled.header`
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

export const SectionButtons = styled.section`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px ;
  color: #fff;
  button {
    flex-grow: 1;
    flex-basis: 100px
  }
`;

export const CategoryButton = styled.button`
  text-transform: uppercase;
  min-width: 100px;
  max-width: 200px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  background: rgb(121, 173, 220);
  background: linear-gradient(0deg, rgba(121, 173, 220,1) 0%, rgba(111, 173, 210,1) 100%);
  border: none;

  :before {
    height: 0%;
    width: 2px;
  }
  :hover {
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
`;
