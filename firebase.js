import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtLRX8zBes_x9dVzByQUMrrGOZqyVGRo4",
  authDomain: "humsawar.firebaseapp.com",
  projectId: "humsawar",
  storageBucket: "humsawar.appspot.com",
  messagingSenderId: "284612272803",
  appId: "1:284612272803:web:e6c2887e6edc1c0612d516"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
export default firebaseConfig;