import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screen/LoginScreen";
import Register from "./screen/Register";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  
     <Stack.Navigator>
          
          
        
          <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
