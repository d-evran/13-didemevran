import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthProvider";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Router from "./Router";
import UrunlerMarkalar from "../screens/UrunlerMarkalar";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  const user = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {user === null && <Stack.Screen name="Login" component={LoginScreen} />}
        {user !== null && (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        )}
        <Stack.Screen name="Router" component={Router} />
        <Stack.Screen name="UrunlerMarkalar" component={UrunlerMarkalar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
