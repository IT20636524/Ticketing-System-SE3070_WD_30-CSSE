import React, {Component} from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {useNavigation} from "@react-navigation/core";

const Forget = () => {

    const naviation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                     source={require('../../assets/images/login/bgauth.jpg')}/>
                </View>
                <View style={{padding: 10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/login/ticketsystem.webp')} resizeMode={'contain'}
                                   style={{width: '100%', height: 150}}/>
                        </View>
                    </View>

                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Your email address"/>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            naviation.navigate("Login")
                        }} style={styles.defaultButton}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>Send Reset Link</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <View style={{height: 1, backgroundColor: '#ddd', width: '100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            naviation.navigate("Login")
                        }}>
                            <Text style={{color: "#737373", textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Already
                                Have Account? <Text style={{color:'#4287f5'}}>Login</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, defaultBg: {
        width: '100%',
        height: 120
    }, formInput: {
        marginTop: 10,
        padding: 10,
    }, textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#075985',
        borderRadius: 10,
    }
});

export default Forget;