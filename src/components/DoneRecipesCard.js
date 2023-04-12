import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import icon from '../images/shareIcon.svg';

function DoneRecipesCard(props) {
  const [link, setLink] = useState('');

  const handleClick = (type, id) => {
    clipboardCopy(`http://localhost:3000/${type}s/${id}`);
    setLink('Link copied!');
  };

  const { index, image, name, category, date, tags, type, id } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link
        to={ `/${type}s/${id}` }
      >
        <h1 data-testid={ `${index}-horizontal-name` }>{ name }</h1>
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
      <p
        data-testid="link-copied"
      >
        { link }
      </p>
      <button
        onClick={ () => handleClick(type, id) }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share button"
          src={ icon }
        />
      </button>
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
    </div>
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
