import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@react-navigation';
import {FlatList} from 'react-native-gesture-handler';

import api from '../../services/api';
import Loader from '../../components/Loader';

import {Container} from './styles';
import PokemonListCard from '../../components/PokemonListCard';

export interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonListProps {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

const PokemonList: React.FC<IPokemonListProps> = ({navigation}) => {
  const [pokemons, setPokemos] = useState<IPokemon[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('pokemon/?offset=0&limit=20').then((response) => {
      setPokemos(response.data.results);
      setCurrentOffset(currentOffset + 20);
    });
  }, []);

  const handleLoadMorePokemons = async () => {
    setLoading(true);
    const newPokemons = await api.get(
      `pokemon/?offset=${currentOffset}&limit=20`,
    );

    setPokemos([...pokemons, ...newPokemons.data.results]);

    setCurrentOffset(currentOffset + 20);
    setLoading(false);
  };

  return (
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({item: pokemon}) => (
          <PokemonListCard item={pokemon} navigationProp={navigation} />
        )}
        onEndReached={handleLoadMorePokemons}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<Loader loading={loading} />}
      />
    </Container>
  );
};

export default PokemonList;
