import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import PokedexScreen from '../PokedexSceen/PokedexSceen';
import PokemonDisplayScreen from '../PokemonDisplayScreen/PokemonDisplayScreen';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonDisplayScreen"
        component={PokemonDisplayScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;
