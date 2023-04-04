import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import MyWalletScreen from "../screens/MyWalletScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import HomeRouter from "./HomeRouter";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors.active,
          tabBarInactiveTintColor: Colors.inactive,
        }}
      >
        <Tab.Screen
          name="Anasayfa"
          component={HomeRouter}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name="home-sharp"
                  size={24}
                  color={focused ? "black" : "#ababab"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Kategoriler"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="category"
                  size={24}
                  color={focused ? "black" : "#ababab"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="QR Kodum"
          component={QRCodeScreen}
          options={{
            headerTitle: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Octicons name="question" size={24} color="black" />
                <Text
                  style={{ marginLeft: 15, fontWeight: "600", fontSize: 18 }}
                >
                  Hopi QR Kodum
                </Text>
              </View>
            ),
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name="qr-code-sharp"
                  size={24}
                  color={focused ? "black" : "#ababab"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cüzdanim"
          component={MyWalletScreen}
          options={{
            headerTitle: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Octicons name="question" size={24} color="black" />
                <Text
                  style={{ marginLeft: 15, fontWeight: "600", fontSize: 18 }}
                >
                  Cüzdanim
                </Text>
              </View>
            ),
            headerRight: () => (
              <Text style={{ marginRight: 15 }}>Islem Gecmisi</Text>
            ),
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name="wallet-sharp"
                  size={24}
                  color={focused ? "black" : "#ababab"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Hesabim"
          component={MyAccountScreen}
          options={{
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Ionicons name="settings-sharp" size={24} color="black" />
              </View>
            ),
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{display: "flex", flexDirection: "row"}}>
                  <Ionicons
                    name="md-person-sharp"
                    size={24}
                    color={focused ? "black" : "#ababab"}
                  />
                  <View style={{ backgroundColor: "#EC0E0B", width: 13, height: 13, borderRadius: 7, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{color: "white", fontSize: 10}}>7</Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
