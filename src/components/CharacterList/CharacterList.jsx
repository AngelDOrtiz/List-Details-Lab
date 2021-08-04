import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

const CharacterList = ({ characters }) => {
  console.log(characters);
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        {...character}
      />
    </li>
  ));
  
  return <ul>{characterElements}</ul>;
};
  
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      affilliation: PropTypes.string.isRequired,
      allies: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
  
export default CharacterList;
