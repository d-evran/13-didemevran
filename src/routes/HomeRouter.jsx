import { StyleSheet, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HopiScreen from "../screens/HopiScreen";
import HopiShopScreen from "../screens/HopiShopScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

const Tab = createMaterialTopTabNavigator();

const HomeRouter = () => {
  const insets = useSafeAreaInsets();
  const [topBarImages, setTopBarImages] = useState([]);

  useEffect(() => {
    const imagesRef = collection(db, "topBarImages");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          data.push({
            id: doc.id,
            image: doc.data().image,
          });
        });
        setTopBarImages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { paddingVertical: 5 },
        tabBarIndicatorStyle: {borderBottomColor: "#A94C79", borderBottomWidth: 2},
        
      }}
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Tab.Screen
        name="Hopi"
        component={HopiScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image style={styles.image} source={{ uri: topBarImages[0]?.image }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="HopiShop"
        component={HopiShopScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image style={styles.image} source={{ uri: topBarImages[1]?.image }} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
