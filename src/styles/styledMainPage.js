import styled from 'styled-components';

export const MainRecipes = styled.main`
  padding: 10px;
  background-color: rgb(255, 192, 159);
  color: #fff;
`;

export const SectionButtons = styled.section`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 2;
  justify-content: space-between;
  align-items: center;
  padding: 140px 0 0;
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

export const SectionRecipes = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  gap: 10px;
  padding-bottom: 100px;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
`;

export const CardRecipe = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: #fff;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  button {
    width: 100%;
    height: 100%;
    border: none;
  }
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
    transition: inset .3s .3s ease-out;
    text-transform: uppercase;
  }
  :hover h3 {
    /* inset: auto auto 100px 0; */
    z-index: 1;
    transition: inset .3s ease-out;
  }
`;
