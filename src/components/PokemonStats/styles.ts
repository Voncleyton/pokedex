import styled from 'styled-components/native';

export const StatsContainer = styled.View`
  margin-top: 15px;
  flex: 1;

  flex-direction: column;
  height: auto;
  margin-top: 15px;
  background: #4aa8d7;
  padding: 25px;
  border-radius: 15px;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #fff;
`;
