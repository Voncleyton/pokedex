import React from 'react';

import {Text, Image} from 'react-native';

import {
  EvolutionChainContainer,
  EvolutionCart,
  PokemonName,
  PokemonImage,
} from './styles';

const PokemonEvolutionChain: React.FC = ({evolutions}) => {
  return (
    <EvolutionChainContainer horizontal={true}>
      <EvolutionCart>
        <PokemonImage source={{uri: evolutions.image_url}} />
        <PokemonName>{evolutions.name}</PokemonName>
      </EvolutionCart>
    </EvolutionChainContainer>
  );
};

export default PokemonEvolutionChain;
