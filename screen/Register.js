import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Register = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const toggleAcceptance = () => setIsAccepted(!isAccepted);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>S</Text>
      </View>

      {/* Title Section */}
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Create your account to continue</Text>

      {/* Input Fields */}
      <InputField label="Phone Number" placeholder="Enter Your Phone Number" keyboardType="numeric" />
      <InputField label="Password" placeholder="Enter Your Password" secureTextEntry />
      <InputField label="Confirm Password" placeholder="Confirm Your Password" secureTextEntry />

      {/* Terms and Conditions */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleAcceptance}>
        <View style={styles.indicator}>
          {isAccepted && <View style={styles.indicatorFilled} />}
        </View>
        <Text style={styles.checkboxText}>
          By clicking Register you confirm to have read in detail, understood, and agreed to the{" "}
          <Text style={styles.link}>Terms and Conditions</Text>, the{" "}
          <Text style={styles.link}>Privacy Policy</Text>, and that you are over 18 years of age.
        </Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} disabled={!isAccepted}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login Here</Text>
      </Text>
    </View>
  );
};

// Reusable Input Field Component
const InputField = ({ label, placeholder, secureTextEntry = false, keyboardType = "default" }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#666"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </View>
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
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    color: "#aaa",
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  indicator: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#00FFAB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  indicatorFilled: {
    height: 12,
    width: 12,
    backgroundColor: "#00FFAB",
    borderRadius: 2,
  },
  checkboxText: {
    flex: 1,
    color: "#aaa",
    fontSize: 14,
  },
  link: {
    color: "#00FFAB",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#00FFAB",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#00120E",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: "#aaa",
    textAlign: "center",
  },
  loginLink: {
    color: "#00FFAB",
    fontWeight: "bold",
  },
});

export default Register;
