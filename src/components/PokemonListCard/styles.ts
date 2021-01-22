import styled from 'styled-components/native';
import {Image} from 'react-native';

export const PokemonCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 15px;
  background: #e64e1c;
  padding: 5px;
  border-radius: 15px;
  border: 4px solid #fedd01;
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
  font-size: 24px;
  font-weight: bold;
  color: #fedd01;
`;
