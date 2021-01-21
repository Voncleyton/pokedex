import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';
import formatName from './services/formatName';

const MainRoute = createStackNavigator();

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
            borderBottomWidth: 2,
            borderBottomColor: '#fedd01',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
          },
          headerTintColor: '#FEDD01',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 38,
          },
          headerTitleAlign: 'center',
        }}
      />
      <MainRoute.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={({route}) => ({
          title: formatName(route.params?.name),
          headerStyle: {
            backgroundColor: '#e54d1c',
            height: 100,
            borderBottomWidth: 2,
            borderBottomColor: '#fedd01',
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
          },
          headerTintColor: '#FEDD01',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 38,
          },
          headerTitleAlign: 'center',
        })}
      />
    </MainRoute.Navigator>
  );
}

export default Routes;
