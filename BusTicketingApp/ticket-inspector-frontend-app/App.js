import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarCodeScan from "./src/screens/BarcodeScanner";
import Home from "./src/screens/Home";
import RouteScreen from "./src/screens/Route";


function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Route">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Route" component={RouteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BarCodeScan" component={BarCodeScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
