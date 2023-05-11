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

export const SectionDoneRecipes = styled.section`
  padding: 150px 20px ;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CardDoneRecipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #79addc;
  padding-bottom: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

`;

export const ContentCardDoneRecipe = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  position: relative;
  color: #fff;
  img {
    cursor: pointer;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all .2s ease-out;
  }
  :hover img {
    transition: all .3s ease-in;
    opacity: 0.8;
  }

  h3 {
    cursor: pointer;
    color: #fff;
    font-family: inherit;
    background-color: black;
    padding: 3px;
    width: 100%;
    position: absolute;
    inset: auto auto 0 0;
    margin: 0;
    text-align: center;
    transition: inset .3s .3s ease-out;
    text-transform: uppercase;
  }
  :hover h3 {
    /* inset: auto auto 100px 0; */
    z-index: 1;
    transition: inset .3s ease-out;
  }
`;

export const DoneRecipeButton = styled.button`
  background-color: #FFC09F;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
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

export const FloatMsg = styled.div`
  position: absolute;
  transform: translate(-25%,150%);
  color: #fff;
`;