import React, {useEffect, useState} from 'react';

import {IPokemon} from '../../globalTypes';

import {
  PokemonCart,
  PokemonName,
  PokemonImage,
  PokemonInfoContainer,
} from './styles';
import axios from 'axios';

interface IOtherInformations {
  image_url: string;
}

interface IPokemonListItem {
  item: IPokemon;
}

const PokemonListItem: React.FC<IPokemonListItem> = ({
  item,
  navigationProp,
}) => {
  const initialOtherInformations: IOtherInformations = {
    image_url:
      'http://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png',
  };

  const [moreInformations, setMoreInformations] = useState<IOtherInformations>(
    initialOtherInformations,
  );

  useEffect(() => {
    const handleLoadOtherInformations = async () => {
      const response = await axios.get(item.url);

      setMoreInformations({
        image_url:
          response.data.sprites.other['official-artwork'].front_default,
      });
    };

    handleLoadOtherInformations();
  }, [item.url]);

  return (
    <PokemonCart onPress={() => navigationProp.navigate('PokemonDetails')}>
      <PokemonImage source={{uri: moreInformations.image_url}} />
      <PokemonInfoContainer>
        <PokemonName>{item.name}</PokemonName>
      </PokemonInfoContainer>
    </PokemonCart>
  );
};

export default PokemonListItem;
