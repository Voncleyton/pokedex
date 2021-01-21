import React from 'react';

import {Text} from 'react-native';

import {StatsContainer, InfoContainer, Title, Description} from './styles';
import {IPokemonStat} from '../../globalTypes';

interface IPokemonStatsProps {
  stats: IPokemonStat[];
}

const PokemonStats: React.FC<IPokemonStatsProps> = ({stats}) => {
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
