import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Image, View, Text} from "react-native";
import AuthService from "../../services/authService";

const Splash = () => {
    const [isGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(() => {
        const getData = async () => {
            try {
                let user_token = await AuthService.getCurrentUserToken();

                if (isGo === true) {
                    if (user_token == "logout") {
                        setTimeout(() => {
                            Navigation.navigate("Login");
                            setIsGo(false);
                        }, 2000);
                    } else {
                        setTimeout(() => {
                            // Navigation.navigate("Home");
                            Navigation.navigate("PaymentHome");
                            setIsGo(false);
                        }, 2000);
                    }
                }
            } catch (e) {
                console.log(e.message)
            }
        }

        getData();
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#22d3ee"}}>
            <Image source={require('../../assets/images/login/ticketsystem.webp')} style={{width: 275, height: 230}}/>
            <Text style={{
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textShadowRadius: 25,
                marginTop: 50
            }}>WELCOME PASSENGER </Text>
        </View>
    )
}

export default Splash;
