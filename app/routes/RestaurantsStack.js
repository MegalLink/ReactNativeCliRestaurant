import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurants from '../pages/Restaurants';
const Stack = createStackNavigator();
const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
        {/* Aparece primero desde navigation según el orden */}
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{title: 'Restaurantes'}}
      />
    </Stack.Navigator>
  );
};
export default RestaurantsStack
