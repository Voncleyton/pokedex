import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';

export const PokemonCart = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 15px;
  background: #e54d1c;
  padding: 5px;
  border-radius: 15px;
`;

export const PokemonImage = styled(Image)`
  height: 150px;
  width: 150px;
`;

export const PokemonInfoContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const PokemonName = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: #fedd01;
`;
