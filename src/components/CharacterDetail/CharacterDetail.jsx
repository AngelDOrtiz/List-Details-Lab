/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, affiliation, allies, photoUrl, enemies }) => {

  return (
    <>
      <p>{ name }</p>
      <img src={ photoUrl }></img>
      <p>{ affiliation }</p>
      <p>{ allies }</p>
      <p>{ enemies }</p>
    </>
  );
};

CharacterDetail.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isReqruied,
  enemies: PropTypes.string.isRequired
};

export default CharacterDetail;
