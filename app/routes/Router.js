import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import {Icon} from 'react-native-elements';
import {colorPrimary} from '../theme/theme'
const screenOptions=(ruta,color)=>{
  let iconName;
  switch(ruta.name){
    case "restaurants":
      iconName="compass"
      break;
    case "favorites":
      iconName="heart"
      break;
    case "search":
      iconName="search"
      break;
    case "account":
        iconName="user"
        break;
    case "top-restaurants":
        iconName="star"
        break;
    default:
      break;
  }
  return(<Icon  type='font-awesome-5' name={iconName} size={22} color={color}  ></Icon>)
}
const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor:colorPrimary,
        }}
        screenOptions={({route})=>({
          tabBarIcon:({color})=>screenOptions(route,color)
        })}>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{title: 'Restaurantes'}}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{title: 'Favoritos'}}
        />

        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{title: 'Top 5'}}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{title: 'Buscar'}}
        />

        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{title: 'Cuenta'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
