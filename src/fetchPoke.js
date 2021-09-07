const fetchPoke = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
    .then((res) => res.json())
    .then((res) => res.results);
  return data;
};

export default fetchPoke;