import React, {useEffect, useState} from 'react';

import {RootStackParamList} from '@react-navigation';
import {RouteProp} from '@react-navigation/native';

import {Container} from './styles';
import PokemonDetailsCard from '../../components/PokemonDetailsCard';
import PokemonStats from '../../components/PokemonStats';
import {IPokemonDetails} from '../../globalTypes';
import {getBasicInfo} from '../../services/getPokemonInfo';

interface IPokemonListProps {
  route: RouteProp<RootStackParamList, 'Profile'>;
}

const PokemonDetails: React.FC<IPokemonListProps> = ({route}) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>({});

  useEffect(() => {
    const getPokemonDetails = async () => {
      const {imageUrl, height, weight, types, stats} = await getBasicInfo(
        route.params.url,
      );

      setPokemonDetails({
        name: route.params.name,
        imageUrl,
        height,
        weight,
        types,
        stats,
      });
    };

    getPokemonDetails();
  }, []);

  return (
    <Container>
      <PokemonDetailsCard details={pokemonDetails} />
      <PokemonStats stats={pokemonDetails.stats} />
    </Container>
  );
};

export default PokemonDetails;
