import styled from 'styled-components/native';
import {Image} from 'react-native';

export const PokemonCart = styled.View`
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 15px;
  background: #e54d1c;
  padding: 5px;
  border-radius: 15px;
  border: 4px solid #fedd01;
`;

export const PokemonImage = styled(Image)`
  height: 300px;
  width: 300px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const PokemonDescriptionsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const PokemonInfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonTypesContainer = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Type = styled.View`
  padding: 5px 15px 5px 15px;
  background: #999;
  border-radius: 10px;
  margin: 0 5px 0 5px;
`;
