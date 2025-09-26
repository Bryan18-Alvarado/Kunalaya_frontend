import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const departamentos = [
  'Selecciona tu departamento',
  'Managua',
  'León',
  'Granada',
  'Masaya',
  'Chinandega',
  'Matagalpa',
  'Estelí',
  'Carazo',
  'Rivas',
  'Jinotega',
  'Nueva Segovia',
  'Boaco',
  'Madriz',
  'Río San Juan',
  'RACCN',
  'RACCS',
];

export default function RegisterScreen({ onLogin }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [departamento, setDepartamento] = useState(departamentos[0]);
  const [municipio, setMunicipio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 24 }} showsVerticalScrollIndicator={false}> */}
        <View style={styles.card}>
  <Image source={require('../assets/images/kunalaya-logo.png')} style={styles.logoHeader} />
        <Text style={styles.title}>Crear Cuenta</Text>
        <Text style={styles.subtitle}>Únete a la comunidad Kunalaya</Text>

        <View style={styles.row}>
          <View style={styles.inputHalf}>
            <Text style={styles.label}>Nombre</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="account-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Tu nombre"
                placeholderTextColor="#bdbdbd"
                value={nombre}
                onChangeText={setNombre}
              />
            </View>
          </View>
          <View style={styles.inputHalf}>
            <Text style={styles.label}>Apellido</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="account-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Tu apellido"
                placeholderTextColor="#bdbdbd"
                value={apellido}
                onChangeText={setApellido}
              />
            </View>
          </View>
        </View>

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

        <Text style={styles.label}>Departamento</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="map-marker-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
          <Picker
            selectedValue={departamento}
            style={styles.picker}
            onValueChange={setDepartamento}
          >
            {departamentos.map((dep) => (
              <Picker.Item label={dep} value={dep} key={dep} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Municipio</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tu municipio"
            placeholderTextColor="#bdbdbd"
            value={municipio}
            onChangeText={setMunicipio}
          />
        </View>

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Crea una contraseña"
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

        <Text style={styles.label}>Confirmar contraseña</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={22} color="#bdbdbd" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Confirma tu contraseña"
            placeholderTextColor="#bdbdbd"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <MaterialCommunityIcons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={22} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <View style={styles.termsRow}>
          <Checkbox
            value={acceptedTerms}
            onValueChange={setAcceptedTerms}
            style={styles.checkbox}
          />
          <Text style={styles.termsText}>
            Acepto los <Text style={styles.link}>términos y condiciones</Text> y la <Text style={styles.link}>política de privacidad</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          ¿Ya tienes una cuenta? <Text style={styles.loginLink} onPress={onLogin}>Inicia sesión aquí</Text>
        </Text>

        <View style={styles.communityCard}>
          <MaterialCommunityIcons name="heart-outline" size={20} color="#fb8500" style={{ marginBottom: 2 }} />
          <Text style={styles.communityText}>Juntos preservamos el patrimonio cultural de Nicaragua</Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    width: '100%',
    maxWidth: 370,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  logoHeader: {
    width: 220,
    height: 50,
    marginBottom: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#22223b',
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    color: '#457b9d',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 2,
  },
  inputHalf: {
    flex: 1,
    marginRight: 4,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 6,
    paddingHorizontal: 6,
    marginBottom: 6,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  inputIcon: {
    marginRight: 6,
    fontSize: 18,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#22223b',
  },
  picker: {
    flex: 1,
    height: Platform.OS === 'android' ? 54 : 50,
    fontSize: 16,
    color: '#22223b',
    backgroundColor: 'transparent',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    width: '100%',
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    color: '#22223b',
    fontSize: 11,
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#219ebc',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  loginText: {
    color: '#22223b',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 6,
  },
  loginLink: {
    color: '#219ebc',
    fontWeight: 'bold',
  },
  communityCard: {
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    width: '100%',
    marginTop: 4,
  },
  communityText: {
    color: '#fb8500',
    fontSize: 11,
    textAlign: 'center',
  },
});