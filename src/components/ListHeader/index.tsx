import React from 'react';

import {SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';

interface IListHeaderProps {
  handleFilterPokemonList: (filter: string) => void;
  listFilter: string;
}

const ListHeader: React.FC<IListHeaderProps> = ({
  handleFilterPokemonList,
  listFilter,
}) => {
  return (
    <SearchBar
      placeholder="Busque um Pokémon."
      round
      lightTheme
      containerStyle={styles.cotainer}
      inputContainerStyle={styles.inputCotainr}
      inputStyle={styles.input}
      onChangeText={(text) => handleFilterPokemonList(text)}
      value={listFilter}
    />
  );
};

const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: '#3B4CCA',
    borderRadius: 15,
  },
  inputCotainr: {
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  input: {
    backgroundColor: '#fff',
  },
});

export default ListHeader;
