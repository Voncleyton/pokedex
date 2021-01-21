import React from 'react';

import {Text} from 'react-native';

import {
  StatsContainer,
  InfoContainer,
  Title,
  Line,
  Description,
} from './styles';

const PokemonStats: React.FC = ({stats}) => {
  return (
    <>
      <StatsContainer>
        <Title>Stats</Title>
        {stats
          ? stats.map((stat) => (
              <InfoContainer key={stat.name}>
                <Description>{stat.name}</Description>
                <Description>{stat.value}</Description>
              </InfoContainer>
            ))
          : null}
      </StatsContainer>
    </>
  );
};

export default PokemonStats;
