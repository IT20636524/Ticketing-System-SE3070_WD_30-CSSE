import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native";
import Login from "../screens/Login/LoginScreen";
import LocalRegister from "../screens/Registration/LocalPassengerRegister";
import Forgot from "../screens/Login/Forgot";
import Splash from "../screens/Home/SplashScreen";
import Home from "../screens/Home/Home";
import ForeignRegister from "../screens/Registration/ForeignPassengerRegister";
import UserSelection from "../screens/Registration/UserSelection";
import PaymentHome from "../screens/Home/PaymentHome";
import PaymentCardValidation from "../screens/Payment/PaymentCardValidation";
import AddPayementCard from "../screens/PaymentCard/AddPayementCard";
import AddPayement from "../screens/Payment/AddPayemnt";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShown: false}} name="LocalRegister" component={LocalRegister}/>
                <Stack.Screen options={{headerShown: false}} name="ForeignRegister" component={ForeignRegister}/>
                <Stack.Screen options={{headerShown: false}} name="Forget" component={Forgot}/>
                <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/>
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
                <Stack.Screen options={{headerShown: false}} name="UserSelection" component={UserSelection}/>
                <Stack.Screen options={{headerShown: false}} name="AddCard" component={AddPayementCard}/>
                <Stack.Screen options={{headerShown: false}} name="AddPayment" component={AddPayement}/>
                <Stack.Screen options={{headerShown: false}} name="PaymentHome" component={PaymentHome}/>
                <Stack.Screen options={{headerShown: false}} name="PaymentCardValidation" component={PaymentCardValidation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
