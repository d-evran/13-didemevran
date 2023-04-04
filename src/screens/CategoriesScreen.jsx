import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TekliflerScreen from './TekliflerScreen';
import MarkalarScreen from './MarkalarScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const CategoriesScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { borderBottomColor: "#383838", borderBottomWidth: 2 },
      }}
    >
      <Tab.Screen
        name="Teklifler"
        component={TekliflerScreen}
        options={{tabBarLabelStyle:{textTransform:'none'}}}
      />
      <Tab.Screen
        name="Markalar"
        component={MarkalarScreen}
        options={{tabBarLabelStyle:{textTransform:'none'}}}
      />
    </Tab.Navigator>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})