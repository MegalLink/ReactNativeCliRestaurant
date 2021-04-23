import React from 'react';
import Router from './app/routes/Router'
import {
  Text,
  View,
  StyleSheet,
 
} from 'react-native';

const App = () => {
  
  return (
   <Router/>
  );
};
const styles = StyleSheet.create({
  textDanger: {
    color: '#ffff',
  },
  
  
});

export default App;
