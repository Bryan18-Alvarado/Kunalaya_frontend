import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text } from "react-native";

export default function Index() {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textTranslate = useRef(new Animated.Value(20)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.spring(textTranslate, {
          toValue: 0,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(buttonTranslate, {
          toValue: 0,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={["#fff7f0", "#fff1e0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <Animated.Image
          source={require("../assets/images/gps-logo.png")}
          style={[
            styles.logo,
            { transform: [{ scale: logoScale }], opacity: logoOpacity },
          ]}
          resizeMode="contain"
        />
        <Animated.View
          style={{
            opacity: textOpacity,
            transform: [{ translateY: textTranslate }],
          }}
        >
          <Text style={styles.welcome}>Bienvenido a</Text>
          <Text style={styles.appName}>GPS Gastronomy</Text>
          <Text style={styles.subtitle}>
            Tu guía para descubrir los mejores sabores locales
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            opacity: buttonOpacity,
            transform: [{ translateY: buttonTranslate }],
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            android_ripple={{ color: "rgba(255,255,255,0.12)" }}
            onPress={() => console.log("Ir a siguiente pantalla")}
          >
            <LinearGradient
              colors={["#ff9800", "#ff6d00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff7f0",
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 24,
    borderRadius: 32,
    backgroundColor: "rgba(255,152,0,0.08)",
    shadowColor: "#ff9800",
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
  welcome: {
    color: "#ff9800",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1.2,
    textShadowColor: "#fff1e0",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    marginBottom: 2,
  },
  appName: {
    fontSize: 35,
    fontWeight: "900",
    color: "#ff6d00",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: "#fff",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 16,
  },
  subtitle: {
    color: "#bfa87a",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 38,
    fontWeight: "400",
    letterSpacing: 0.7,
  },
  button: {
    borderRadius: 18,
    overflow: "hidden",
    elevation: 7,
    shadowColor: "#ff9800",
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: 8,
  },
  buttonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    alignItems: "center",
    borderRadius: 18,
    shadowColor: "#ff9800",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.96 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.1,
    textTransform: "uppercase",
    textShadowColor: "#ff9800",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});
