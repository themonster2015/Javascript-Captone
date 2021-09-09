import countPokemons from '../countPokemons';
import fetchPoke from '../fetchPoke'

it('should return the correct number of pokemons', () => {
    fetchPoke.mockImplementation(() => Promise.resolve(["Pokemon 1", "Pokemon 2", "Pokemon 3"]))
const pokemons = 
});