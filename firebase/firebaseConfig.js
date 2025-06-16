// Import the functions you need from the SDKs you need

import {initializeApp,getApps,getApp} from 'firebase/app';
import { initializeAuth,getAuth, getReactNativePersistence} from  'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const firebaseConfig = {
  apiKey: "AIzaSyBj74tPX_WUICoL-HpugLibi_SiuGkm-zQ",
  authDomain: "taxflick-add14.firebaseapp.com",
  projectId: "taxflick-add14",
  storageBucket: "taxflick-add14.appspot.com",
  messagingSenderId: "966919200661",
  appId: "1:966919200661:web:9bd03cc063c53102ece09c",
  measurementId: "G-R5Q1BD693V"
};

// 1. Initialize app once

const firebaseApp = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// 2. Initialize Auth only once
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { firebaseApp, auth  };