import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../pages/Account/Account';
import Login from '../pages/Account/Login'
import Register from '../pages/Account/Register'
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
      {/* Al segundo stack automaticamente se le pone un back button al primer stack */}
      <Stack.Screen name="Login"
        component={Login}
        options={{title: 'Iniciar Sesión'}}>
        
      </Stack.Screen>
      <Stack.Screen name="Register"
        component={Register}
        options={{title: 'Registro'}}>
        
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AccountStack