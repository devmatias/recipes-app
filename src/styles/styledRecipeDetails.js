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
  background-image: url(${table});
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
  border-radius: 10px;
`;

export const TitleRecipe = styled.h1`
  align-self: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 200px;

 `;

export const RecipeImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  min-width: 200px;
`;
