import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarCodeScan from "./src/screens/BarcodeScanner";
import Home from "./src/screens/Home";
import RouteScreen from "./src/screens/Route";
import Dash from "./src/screens/Dash";
import Splash from "./src/screens/Splash";



function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">       
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Route" component={RouteScreen} />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="BarCodeScan" component={BarCodeScan} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
