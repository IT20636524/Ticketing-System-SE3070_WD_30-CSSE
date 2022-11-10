import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, ScrollView, Text, View} from "react-native";

import CardService from "../../services/cardService";

function AccountView(props) {
    const [userId, setUserId] = useState("user002");

    useEffect(() => {
        const getUserData = async () => {

        }

        const getCardData = async () => {
            try {
                await CardService.getAllCardByUserId(userId)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err.message)
                    });
            } catch (e) {
                console.log(e.message)
            }
        }

        getUserData();
        getCardData();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                     source={require('../../assets/images/login/bgauth.jpg')}/>
                </View>
                <View style={{padding: 10}}>
                    <Text>{userId}</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AccountView;