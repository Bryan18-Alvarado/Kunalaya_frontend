import { useRouter } from 'expo-router';
import React from 'react';
import RegisterScreen from '../components/RegisterScreen';

export default function Register() {
  const router = useRouter();
  return <RegisterScreen onLogin={() => router.push('/community-stories')} />;
}
