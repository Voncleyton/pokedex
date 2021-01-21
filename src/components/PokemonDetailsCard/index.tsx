import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

import {
  PokemonCart,
  PokemonImage,
  PokemonInfoContainer,
  PokemonDescriptionsContainer,
  PokemonTypesContainer,
  Title,
  Description,
  Type,
} from './styles';
import {IPokemonDetails} from '../../globalTypes';

const PokemonDetailsCard: React.FC<IPokemonDetails> = ({details}) => {
  useEffect(() => {
    console.log('teste');
  }, []);

  return (
    <PokemonCart>
      <PokemonImage source={{uri: details.image_url}} />

      <PokemonDescriptionsContainer>
        <PokemonInfoContainer>
          <Title>{'Height'}</Title>
          <Description>{details.height}</Description>
        </PokemonInfoContainer>
        <PokemonInfoContainer>
          <Title>{'Weight'}</Title>
          <Description>{details.weight}</Description>
        </PokemonInfoContainer>
      </PokemonDescriptionsContainer>

      <Title>{'Types'}</Title>

      <PokemonTypesContainer>
        {details.types
          ? details.types.map((t) => (
              <Type>
                <Description key={t}>{t}</Description>
              </Type>
            ))
          : null}
      </PokemonTypesContainer>
    </PokemonCart>
  );
};

export default PokemonDetailsCard;
