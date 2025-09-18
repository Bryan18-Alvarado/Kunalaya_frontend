
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ onContinue }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.title}>Bienvenidos a Kunalaya</Text>
        <Text style={styles.subtitle}>
          Preservemos juntos nuestras tradiciones, saberes populares y el patrimonio cultural de Nicaragua
        </Text>
        <TouchableOpacity style={styles.button} onPress={onContinue}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Hackathon Nicaragua 2025 • Preservando nuestras raíces</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
    centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 24,
    borderRadius: 45,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223b',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#457b9d',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    width: '100%',
    maxWidth: 370,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardIcon: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardText: {
    color: '#457b9d',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    opacity: 0.5,
  },
  dotActive: {
    backgroundColor: '#219ebc',
    opacity: 1,
  },
  button: {
    backgroundColor: '#219ebc',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 10,
    width: '100%',
    maxWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    maxWidth: 370,
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonOutlineText: {
    color: '#219ebc',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footer: {
    color: '#457b9d',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
});
