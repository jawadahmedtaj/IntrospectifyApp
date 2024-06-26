import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const authDomain = process.env.EXPO_PUBLIC_AUTH_DOMAIN;
const databaseURL = process.env.EXPO_PUBLIC_DATABASE_URL;
const projectId = process.env.EXPO_PUBLIC_PROJECT_ID;
const storageBucket = process.env.EXPO_PUBLIC_STORAGE_BUCKET;
const messagingSenderId = process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID;
const appId = process.env.EXPO_PUBLIC_APP_ID;
const measurementId = process.env.EXPO_PUBLIC_MEASUREMENT_ID;

// Initialize Firebase
const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
