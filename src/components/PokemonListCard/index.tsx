import React, {useEffect, useState} from 'react';

import {IPokemon} from '../../globalTypes';

import {
  PokemonCart,
  PokemonName,
  PokemonImage,
  PokemonInfoContainer,
} from './styles';

import axios from 'axios';
import formatName from '../../services/formatName';

interface IOtherInformations {
  imageUrl: string;
}

interface IPokemonListCard {
  item: IPokemon;
}

const PokemonListCard: React.FC<IPokemonListCard> = ({item}) => {
  const initialOtherInformations: IOtherInformations = {
    imageUrl:
      'http://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png',
  };

  const [moreInformations, setMoreInformations] = useState<IOtherInformations>(
    initialOtherInformations,
  );

  useEffect(() => {
    const handleLoadOtherInformations = async () => {
      const response = await axios.get(item.url);

      setMoreInformations({
        imageUrl: response.data.sprites.other['official-artwork'].front_default,
      });
    };

    handleLoadOtherInformations();
  }, [item.url]);

  return (
    <PokemonCart>
      <PokemonImage source={{uri: moreInformations.imageUrl}} />
      <PokemonInfoContainer>
        <PokemonName>{formatName(item.name)}</PokemonName>
      </PokemonInfoContainer>
    </PokemonCart>
  );
};

export default PokemonListCard;
