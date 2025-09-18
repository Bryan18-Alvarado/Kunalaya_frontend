import { useRouter } from 'expo-router';
import React from 'react';
import LoginScreen from '../components/LoginScreen';

export default function Login() {
  const router = useRouter();
  return (
    <LoginScreen
      onRegister={() => router.push('/register')}
      onForgotPassword={() => {}}
      onLogin={() => router.push('/community-stories')}
    />
  );
}
