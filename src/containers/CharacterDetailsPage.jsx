
import React, { useEffect, useState } from 'react';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';
import { fetchCharacterById } from '../services/avatarApi';
import { useParams } from 'react-router-dom';

const CharacterDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { _id } = useParams();

  useEffect(async () => {
    const characterMatch = await fetchCharacterById(_id);
    setCharacter(characterMatch);
    setLoading(false);
  }, [_id]);

  if(loading) return <h1>Loading...</h1>;
  return <CharacterDetail {...character} />;
};

export default CharacterDetailsPage;
