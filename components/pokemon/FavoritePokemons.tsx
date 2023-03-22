import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from '.';
interface Props {
	favoritePokemons: number[];
}
export const FavoritePokemons: React.FC<Props> = ({ favoritePokemons }) => {
	return (
		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{favoritePokemons.map(id => (
				<FavoritePokemonCard pokemonId={id} key={id} />
			))}
		</Grid.Container>
	);
};
