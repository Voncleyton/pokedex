import React from 'react';

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

interface IPokemoDetailsProps {
  details: IPokemonDetails;
}

const PokemonDetailsCard: React.FC<IPokemoDetailsProps> = ({details}) => {
  const defaultImageUrl =
    'http://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png';

  return (
    <PokemonCart>
      <PokemonImage source={{uri: details.imageUrl || defaultImageUrl}} />

      <PokemonDescriptionsContainer>
        <PokemonInfoContainer>
          <Title>{'Height'}</Title>
          <Description>{`${details.height / 10} m`}</Description>
        </PokemonInfoContainer>
        <PokemonInfoContainer>
          <Title>{'Weight'}</Title>
          <Description>{`${details.weight / 10} Kg`}</Description>
        </PokemonInfoContainer>
      </PokemonDescriptionsContainer>

      <Title>{'Types'}</Title>

      <PokemonTypesContainer>
        {details.types
          ? details.types.map((t) => (
              <Type key={t}>
                <Description>{t}</Description>
              </Type>
            ))
          : null}
      </PokemonTypesContainer>
    </PokemonCart>
  );
};

export default PokemonDetailsCard;
