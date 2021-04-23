import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Restaurants from '../pages/Restaurants';
import Favorites from '../pages/Favorites';
import TopRestaurants from '../pages/TopRestaurants';
import Search from '../pages/Search';
import Account from '../pages/Account';
const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{title: 'Restaurantes'}}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{title: 'Favoritos'}}
        />
       
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{title: 'Top'}}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{title: 'Buscar'}}
        />
       
        <Tab.Screen
          name="account"
          component={Account}
          options={{title: 'Cuenta'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
