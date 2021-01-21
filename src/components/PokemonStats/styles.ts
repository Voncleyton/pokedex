import styled from 'styled-components/native';

export const StatsContainer = styled.View`
  margin-top: 15px;
  flex: 1;

  flex-direction: column;
  height: auto;
  margin-top: 15px;
  background: #4aa8d7;
  padding: 10px 25px 10px 25px;
  border-radius: 15px;
  border: 4px solid #fedd01;
`;
export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
