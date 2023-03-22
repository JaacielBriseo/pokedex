import { GetStaticProps, NextPage } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../../api';
import { PokemonListResponse, SmallPokemon } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { PokemonCard } from '../../components/pokemon';

interface Props {
	pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout title='Listado de pokemons'>
			<Grid.Container gap={2} justify='flex-start'>
				{pokemons.map(pokemon => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

//! get static props solo se ejecuta del lado del servidor, nunca llega al cliente mas que lo que se pasa a las props.
export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
	const pokemons: SmallPokemon[] = data.results.map((result, index) => {
		return {
			...result,
			id: index + 1,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				index + 1
			}.svg`,
		};
	});
	return {
		props: {
			pokemons,
		},
	};
};
export default HomePage;
