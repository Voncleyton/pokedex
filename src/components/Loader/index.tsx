import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

interface ILoaderProps {
  loading: boolean;
}

const Loader: React.FC<ILoaderProps> = ({loading}) => {
  return loading ? (
    <Container>
      <ActivityIndicator size="large" color="#e54d1c" />
    </Container>
  ) : null;
};

export default Loader;
