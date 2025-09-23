import { Redirect } from 'expo-router';

// Simula si el usuario está autenticado
const isLoggedIn = false; // Cambia a true para probar

export default function Index() {
  if (isLoggedIn) {
    return <Redirect href="/(tabs)/home" />;
  }
  return <Redirect href="/(auth)/welcome" />;
}
