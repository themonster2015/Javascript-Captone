import countPokemons from '../countPokemons';

const pokemons = [
  { name: 'bulbasaur', url: 'https://example.com/1/' },
  { name: 'ivysaur', url: 'https://example.com/2/' },
  { name: 'venusaur', url: 'https://example.com/3/' },
  { name: 'charmander', url: 'https://example.com/4/' },
  { name: 'charmeleon', url: 'https://example.com/5/' },
  { name: 'charizard', url: 'https://example.com/6/' },
];

describe('Count pokemons', () => {
  test('that it return the correct number of pokemons', () => {
    expect(countPokemons(pokemons)).toEqual(6);
  });

  test('that it should return 0 if passed an empty array', () => {
    expect(countPokemons([])).toEqual(0);
  });
});