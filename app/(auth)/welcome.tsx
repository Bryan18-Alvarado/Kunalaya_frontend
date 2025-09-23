import { useRouter } from 'expo-router';
import React from 'react';
import WelcomeScreen from '../../components/WelcomeScreen';

export default function Welcome() {
  const router = useRouter();
  return <WelcomeScreen onContinue={() => router.push('/login')} />;
}
