import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Logo />

      {/* Title Section */}
      <Title text="Login" subtitle="Please Sign in to continue" />

      {/* Input Fields */}
      <InputField label="Phone Number" placeholder="Enter Your Phone Number" />
      <InputField label="Password" placeholder="Enter Your Password" secureTextEntry />

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forget Your Password</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <ActionButton title="Login" onPress={() => navigation.navigate('register')} />

      {/* Register Link */}
      <RegisterLink />
    </View>
  );
};

// Reusable Components
const Logo = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText}>S</Text>
  </View>
);

const Title = ({ text, subtitle }) => (
  <>
    <Text style={styles.title}>{text}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </>
);

const InputField = ({ label, placeholder, secureTextEntry = false }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#666"
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const ActionButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.loginButton} onPress={onPress}>
    <Text style={styles.loginButtonText}>{title}</Text>
  </TouchableOpacity>
);

const RegisterLink = () => (
  <Text style={styles.registerText}>
    Don’t have an account? <Text style={styles.registerLink}  > Register Here</Text>
  </Text>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00120E",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#23313c",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotPassword: {
    color: "#00FFAB",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#00FFAB",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#00120E",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    color: "#aaa",
    textAlign: "center",
  },
  registerLink: {
    color: "#00FFAB",
    fontWeight: "bold",
  },
});

export default LoginScreen;
