import styled from 'styled-components/native';
import {Image} from 'react-native';

export const EvolutionChainContainer = styled.ScrollView`
  flex-direction: row;
  justify-content: space-between;
`;
export const EvolutionCart = styled.View`
  flex: 1;
`;

export const PokemonImage = styled(Image)`
  height: 50;
  width: 50px;
`;

export const PokemonName = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: #fedd01;
`;
