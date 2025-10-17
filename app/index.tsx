import { Redirect } from 'expo-router';

// Default behavior: always start at the welcome/auth flow. If you want
// automatic token-based login, we can add that later behind a feature flag.
export default function Index() {
  return <Redirect href="/(auth)/welcome" />;
}
