import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import icon from '../images/shareIcon.svg';
import { CardDoneRecipe, ContentCardDoneRecipe, DoneRecipeButton, FloatMsg } from '../styles/styledDoneRecipes';

function DoneRecipesCard(props) {
  const [link, setLink] = useState('');

  const handleClick = (type, id) => {
    clipboardCopy(`http://localhost:3000/${type}s/${id}`);
    setLink('Link copied!');
  };

  const { index, image, name, category, date, tags, type, id } = props;
  return (
    <CardDoneRecipe>
      <ContentCardDoneRecipe data-testid={ `${index}-recipe-card` }>
        <Link
          to={ `/${type}s/${id}` }
        >
          <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
        <Link
          to={ `/${type}s/${id}` }
        >
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
            width="300px"
          />
        </Link>
        <p data-testid={ `${index}-horizontal-done-date` }>{ date }</p>
      </ContentCardDoneRecipe>
      <DoneRecipeButton
        onClick={ () => handleClick(type, id) }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share button"
          src={ icon }
        />
        <FloatMsg
          data-testid="link-copied"
        >
          { link }
        </FloatMsg>
      </DoneRecipeButton>
      {
        tags && tags.map((tag, i) => (
          <p
            key={ `${tag}-${i}` }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            {tag}
          </p>
        ))
      }
    </CardDoneRecipe>
  );
}

DoneRecipesCard.propTypes = {
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(string),
  id: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default DoneRecipesCard;
