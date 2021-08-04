
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, affiliation, allies, photoUrl, _id }) => (
  <Link to={`/${_id}`}>
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{affiliation}</p>
        <p>{allies}</p>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isReqruied,
};

export default Character;
