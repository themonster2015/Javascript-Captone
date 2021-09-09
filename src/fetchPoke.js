const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

const fetchPoke = async () => fetch(`${pokeUrl}?limit=9`)
  .then((res) => res.json())
  .then((res) => res.results);

export const fetchPokeStats = async (index) => {
  const stats = {};

  const res = await fetch(`${pokeUrl}/${index}`);
  const data = await res.json();

  stats.height = data.height;
  stats.moves = data.moves.length;
  stats.weight = data.weight;
  stats.order = data.order;

  return stats;
};

export default fetchPoke;