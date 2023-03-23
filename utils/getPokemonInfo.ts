import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (query: string) => {
	try {
		const { data } = await pokeApi.get<Pokemon>(`/pokemon/${query}`);
		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		};
	} catch (error) {
		return null;
	}
};
