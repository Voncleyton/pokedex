import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@react-navigation';
import {FlatList, TouchableOpacity} from 'react-native';

import api from '../../services/api';
import Loader from '../../components/Loader';

import {Container} from './styles';
import PokemonListCard from '../../components/PokemonListCard';
import ListHeader from '../../components/ListHeader';
import {IPokemon} from '../../globalTypes';

interface IPokemonListProps {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

const PokemonList: React.FC<IPokemonListProps> = ({navigation}) => {
  const [pokemons, setPokemos] = useState<IPokemon[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filteredPokemonList, setFilteredPokemonList] = useState<IPokemon[]>(
    [],
  );
  const [listFilter, setListFilter] = useState('');

  useEffect(() => {
    api.get('pokemon/?offset=0&limit=20').then((response) => {
      setPokemos(response.data.results);
      setFilteredPokemonList(response.data.results);
      setCurrentOffset(currentOffset + 20);
    });
  }, []);

  const handleLoadMorePokemons = async () => {
    if (filteredPokemonList.length < 20) {
      return;
    }

    setLoading(true);
    const newPokemons = await api.get(
      `pokemon/?offset=${currentOffset}&limit=20`,
    );

    setPokemos([...pokemons, ...newPokemons.data.results]);
    setCurrentOffset(currentOffset + 20);
    setLoading(false);
    handleFilterPokemonList(listFilter);
  };

  const handleFilterPokemonList = (filter: string) => {
    setListFilter(filter);

    let filteredList;
    if (filter) {
      filteredList = pokemons.filter((pokemon) =>
        pokemon.name.toUpperCase().includes(filter.toUpperCase()),
      );
    } else {
      filteredList = pokemons;
    }

    setFilteredPokemonList(filteredList);
  };

  return (
    <Container>
      <FlatList
        data={filteredPokemonList}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({item: pokemon}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PokemonDetails', {
                name: pokemon.name,
                url: pokemon.url,
              })
            }>
            <PokemonListCard item={pokemon} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMorePokemons}
        onEndReachedThreshold={0.1}
        keyboardShouldPersistTaps="never"
        ListFooterComponent={<Loader loading={loading} />}
      />
      <ListHeader
        handleFilterPokemonList={handleFilterPokemonList}
        listFilter={listFilter}
      />
    </Container>
  );
};

export default PokemonList;
