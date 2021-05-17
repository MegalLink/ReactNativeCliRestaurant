import React from 'react';
import Router from './app/routes/Router'
import firebaseApp from './app/utils/firebase';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(["Set a timer"]);
const App = () => {
 
  return (
   <Router/>
  );
};


export default App;
