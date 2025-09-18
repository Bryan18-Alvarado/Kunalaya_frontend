import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ onRegister, onForgotPassword, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>Bienvenido de vuelta a Kunalaya</Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="tu@correo.com"
            placeholderTextColor="#bdbdbd"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Tu contraseña"
            placeholderTextColor="#bdbdbd"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons name={showPassword ? "eye-off-outline" : "eye-outline"} size={22} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.registerText}>
          ¿No tienes una cuenta? <Text style={styles.registerLink} onPress={onRegister}>Regístrate aquí</Text>
        </Text>

        <View style={styles.communityCard}>
          <MaterialCommunityIcons name="heart-outline" size={20} color="#fb8500" style={{ marginBottom: 2 }} />
          <Text style={styles.communityText}>Únete a la comunidad que preserva nuestras tradiciones nicaragüenses</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 18,
    borderRadius: 35,
    backgroundColor: '#fff',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22223b',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    color: '#457b9d',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '400',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 15,
    color: '#22223b',
  },
  forgot: {
    color: '#219ebc',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 12,
    marginTop: -4,
  },
  button: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginVertical: 12,
  },
  registerText: {
    color: '#22223b',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  registerLink: {
    color: '#219ebc',
    fontWeight: 'bold',
  },
  communityCard: {
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  communityText: {
    color: '#fb8500',
    fontSize: 13,
    textAlign: 'center',
  },
});
