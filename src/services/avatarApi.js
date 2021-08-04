export const fetchCharacter = async () => {
  const res = await fetch('/api/v1/characters');
  const json = await res.json();
  
  return json;
};
  
export const fetchCharacterById = async (_id) => {
  const res = await fetch(`/api/v1/characters${_id}`);
  const json = await res.json();
  
  return json;
};
