import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  return (
    <LinearGradient colors={["#fff7f0", "#fff1e0"]} style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/images/gps-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>Accede a tu cuenta para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#bfa87a"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#bfa87a"
          secureTextEntry
        />
        <Pressable style={styles.forgotPassword} onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>
            ¿Olvidaste tu contraseña?
          </Text>
        </Pressable>
        <Pressable style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>o</Text>
          <View style={styles.divider} />
        </View>

        <Pressable style={styles.socialButton} onPress={() => {}}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continuar con Google</Text>
        </Pressable>

        <Pressable
          style={[styles.socialButton, styles.facebook]}
          onPress={() => {}}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
            }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Continuar con Facebook</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    shadowColor: "#ff9800",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff7f0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffe0b2",
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#333",
    marginBottom: 14,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  forgotPasswordText: {
    color: "#ff9800",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#ff9800",
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#ff9800",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#ff9800",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    color: "#bfa87a",
    fontSize: 15,
    marginBottom: 28,
    textAlign: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff7f0",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ffe0b2",
  },
  facebook: {
    backgroundColor: "#f3f6fb",
    borderColor: "#cfd8dc",
  },
  socialIcon: {
    width: 26,
    height: 26,
    marginRight: 12,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  socialText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ffe0b2",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#bfa87a",
    fontWeight: "600",
    fontSize: 15,
  },
});
