import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@react-navigation';

import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';

const MainRoute = createStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <MainRoute.Navigator>
      <MainRoute.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Pokédex',
          headerStyle: {
            backgroundColor: '#e54d1c',
            height: 100,
          },
          headerTintColor: '#FEDD01',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 38,
          },
          headerTitleAlign: 'center',
        }}
      />
      <MainRoute.Screen name="PokemonDetails" component={PokemonDetails} />
    </MainRoute.Navigator>
  );
}

export default Routes;
