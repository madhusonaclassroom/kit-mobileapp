import { Platform } from 'react-native';
import firebase from '@react-native-firebase/app';

const iosConfig = {
    clientId: 'x',
    appId: 'x',
    apiKey: 'x',
    databaseURL: 'x',
    storageBucket: 'x',
    messagingSenderId: 'x',
    projectId: 'x',
   
    // enable persistence by adding the below flag
    persistence: true,
  };

const androidConfig  = {
    apiKey: "AIzaSyAv6cojrjcLtM_xHSZ6FKwbXs3REqg-vvY",
    authDomain: "irepute-cdf5c.firebaseapp.com",
    databaseURL: "https://irepute-cdf5c.firebaseio.com",
    projectId: "irepute-cdf5c",
    storageBucket: "",
    messagingSenderId: "382692793828",
    appId: "1:382692793828:web:935b63acffbad689cfbbf1",

    persistence: true,
  };

  const kitapp = firebase
  .initializeApp(
    // use platform-specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'kit',
  )
  .then(app => console.log('initialized apps ->', firebase.apps));