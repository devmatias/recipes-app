import styled from 'styled-components';
import wallpaper from './backgrounds/wallpaper4_auto_x2.jpeg';
import table from './backgrounds/table.jpg';

export const MainRecipeDetails = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20%;
  color: #fff;
  background-image: 
    linear-gradient(to right bottom,
       rgb(255, 192, 159, 0.5), 
       rgb(255, 192, 159, 0.8)),
       url(${wallpaper});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  `;

export const RecipeSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  gap: 10px;
  width: 100%;
  max-width: 1000px;
  background-image: url(${table});
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
  iframe {
    align-self: center;
    border: none;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  min-width: 200px;
  gap: 10px;
  h1 {
    grid-column: 1 / 2;

  }
  h2 {
    grid-column: 1 / 2;

  }
  ul {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
  }

`;

export const RecipeImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  min-width: 300px;
  grid-column: 1 / 2;
  border-radius: 10px;
`;

export const SectionButtonsRecipe = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const RecipeButton = styled.button`
  background-color: #FFC09F;
  border-radius: 50%;
  width: 70px;
  height: 70px;
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
  transform: translate(-10%,150%);
  color: #fff;
`;

export const StartRecipe = styled.button`
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

export const InvisibleInput = styled.input`
  display: none;
`;

export const CustomLabel = styled.label`
  text-decoration: ${(props) => props.lineThrough && 'line-through solid #fff'};
`;
