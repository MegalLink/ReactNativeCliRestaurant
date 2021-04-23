import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../pages/Search';
const Stack = createStackNavigator();
const SearchStack = () => {
  return (
    <Stack.Navigator>
        {/* Aparece primero desde navigation según el orden */}
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: 'Buscar Restaurantes'}}
      />
    </Stack.Navigator>
  );
};
export default SearchStack