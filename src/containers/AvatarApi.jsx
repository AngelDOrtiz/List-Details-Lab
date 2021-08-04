
import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList/CharacterList';
import { fetchCharacter } from '../services/avatarApi';

const AvatarApi = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(async () => {
    const character = await fetchCharacter();
    setCharacter(character);
    setLoading(false);
  }, []);
  
  if(loading) return <h1>Loading...</h1>; 
  return <CharacterList characters={character} />;
};

export default AvatarApi;
