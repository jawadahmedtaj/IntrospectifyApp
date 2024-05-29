if (__DEV__) {
  require('../ReactotronConfig');
}
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { styled } from 'nativewind';
import { configureMotion } from '@legendapp/motion';
import { app, auth } from '../firebaseConfig';
import { useAuthStore } from '../store/auth';
import { onAuthStateChanged } from 'firebase/auth';
configureMotion({ styled });

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(auth)/login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      app;
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(user !== null);
      console.log({ isUserLoggedIn });
    });
  }, []);

  const isStoreUserLoggedIn = useAuthStore((state) => state.isUserLoggedIn);

  useEffect(() => {
    console.log({ isStoreUserLoggedIn });
  }, [isStoreUserLoggedIn]);

  return (
    <>
      {isUserLoggedIn ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />{' '}
        </Stack>
      ) : (
        <Stack>
          <Stack.Screen name="(auth)" />{' '}
        </Stack>
      )}
    </>
  );
}
