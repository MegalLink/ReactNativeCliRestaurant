import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../pages/Favorites';
const Stack = createStackNavigator();
const FavoritesStack = () => {
  return (
    <Stack.Navigator>
        {/* Aparece primero desde navigation según el orden */}
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Restaurantes Favoritos'}}
      />
    </Stack.Navigator>
  );
};
export default FavoritesStack