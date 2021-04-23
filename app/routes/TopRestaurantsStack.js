import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRestaurants from '../pages/TopRestaurants';
const Stack = createStackNavigator();
const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
        {/* Aparece primero desde navigation según el orden */}
      <Stack.Screen
        name="TopRestaurants"
        component={TopRestaurants}
        options={{title: 'Top Restaurantes'}}
      />
    </Stack.Navigator>
  );
};
export default TopRestaurantsStack