import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';

export default function Logout() {
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.removeItem('authToken')
      .then(() => {
        if (!mounted) return;
        setDone(true);
      })
      .catch(() => {
        if (!mounted) return;
        setDone(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!done) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Redirect href="/(auth)/welcome" />;
}
