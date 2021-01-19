// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';

const MainRoute = createStackNavigator();

function Routes() {
  return (
    <MainRoute.Navigator>
      <MainRoute.Screen name="PokemonList" component={PokemonList} />
      <MainRoute.Screen name="PokemonDetails" component={PokemonDetails} />
    </MainRoute.Navigator>
  );
}

export default Routes;
