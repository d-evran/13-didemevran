import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UrunlerScreen from "./UrunlerScreen";
import MarkalarScreen from "./MarkalarScreen";

const Tab = createMaterialTopTabNavigator();

const UrunlerMarkalar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            borderBottomColor: "#00ACEF",
            borderBottomWidth: 2,
          },
          tabBarActiveTintColor: "#00ACEF",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Ürünler"
          component={UrunlerScreen}
          options={{ tabBarLabelStyle: { textTransform: "none" } }}
        />
        <Tab.Screen
          name="Markalar"
          component={MarkalarScreen}
          options={{ tabBarLabelStyle: { textTransform: "none" } }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default UrunlerMarkalar;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 10 },
});
