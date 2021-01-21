import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@react-navigation';
import {RouteProp, BaseRouter} from '@react-navigation/native';

import {Container} from './styles';
import PokemonDetailsCard from '../../components/PokemonDetailsCard';
import PokemonTypes from '../../components/PokemonTypes';
import PokemonStats from '../../components/PokemonStats';
import PokemonEvolutionChain from '../../components/PokemonEvolutionChain';
import {IPokemonDetails} from '../../globalTypes';

interface IPokemonListProps {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
  route: RouteProp<RootStackParamList, 'Profile'>;
}

const PokemonDetails: React.FC<IPokemonListProps> = ({navigation, route}) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>({});
  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await axios.get(route.params.url);

      const {height, weight} = response.data;

      const stats = response.data.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));

      const types = response.data.types.map((t) => t.type.name);

      setPokemonDetails({
        name: route.params.name,
        image_url: route.params.image_url,
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
