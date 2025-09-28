import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CustomTabBar({ state, descriptors, navigation }) {
  const tabs = [
    {
      name: 'home',
      label: 'Inicio',
      icon: 'home',
    },
    {
      name: 'community-stories',
      label: 'Relatos',
      icon: 'book-open-variant',
    },
    {
      name: 'map',
      label: 'Mapa',
      icon: 'map-marker',
    },
    {
      name: 'games',
      label: 'Juegos',
      icon: 'gamepad-variant',
    },
    {
      name: 'events',
      label: 'Eventos',
      icon: 'calendar',
    },
    {
      name: 'library',
      label: 'Biblioteca',
      icon: 'library',
    },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab, idx) => {
        const isFocused = state.index === idx;
        const color = isFocused ? '#219ebc' : '#bdbdbd';
        return (
          <TouchableOpacity
            key={tab.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => {
              if (!isFocused) {
                navigation.navigate(tab.name);
              }
            }}
            style={styles.navItem}
          >
            <MaterialCommunityIcons name={tab.icon} size={22} color={color} />
            <Text style={isFocused ? styles.navTextActive : styles.navText}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  navText: {
    fontSize: 12,
    color: '#bdbdbd',
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 12,
    color: '#219ebc',
    fontWeight: 'bold',
    marginTop: 2,
  },
});

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="community-stories" options={{ title: 'Relatos' }} />
      <Tabs.Screen name="map" options={{ title: 'Mapa' }} />
      <Tabs.Screen name="games" options={{ title: 'Juegos' }} />
      <Tabs.Screen name="events" options={{ title: 'Eventos' }} />
      <Tabs.Screen name="library" options={{ title: 'Biblioteca' }} />
    </Tabs>
  );
}