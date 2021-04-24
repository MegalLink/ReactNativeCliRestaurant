import firebase from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyAHWr_BgZTiHW7l0GhhF5xmSGYR5SVLSbI",
    authDomain: "restaurantereactnative.firebaseapp.com",
    projectId: "restaurantereactnative",
    storageBucket: "restaurantereactnative.appspot.com",
    messagingSenderId: "320254909575",
    appId: "1:320254909575:web:7358240e1dc64974a06c22"
  };
  // Initialize Firebase
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
 export default firebaseApp