import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../pages/Account';
const Stack = createStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
        {/* Aparece primero desde navigation según el orden */}
      <Stack.Screen
        name="Account"
        component={Account}
        options={{title: 'Mi cuenta'}}
      />
    </Stack.Navigator>
  );
};
export default AccountStack