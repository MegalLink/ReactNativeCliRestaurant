import React from 'react';
import Router from './app/routes/Router'
import firebaseApp from './app/utils/firebase'


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
