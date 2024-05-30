import { auth } from '@/firebaseConfig';
import { useAuthStore } from '@/store/auth';
import { Motion } from '@legendapp/motion';
import { router } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const login = async () => {
    try {
      setLoading(true);
      console.log('Login', { email, password });
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      login();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex bg-base-100 flex-grow justify-center items-center">
      <KeyboardAvoidingView className="min-w-[80%]">
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          className="mb-10 border-b-2 border-slate-200 focus:border-slate-500"
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          keyboardType="visible-password"
          className="border-b-2 border-slate-200 focus:border-slate-500"
        />
        {error && (
          <Motion.Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 500 }}
            className="text-red-500 pt-4"
          >
            {error}
          </Motion.Text>
        )}
        <View className="pt-4">
          <TouchableOpacity
            className="bg-secondary flex items-center my-2 py-3 rounded-3xl"
            onPress={login}
          >
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary flex items-center my-2 py-3 rounded-3xl"
            onPress={register}
          >
            <Text className="text-white">Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Auth;