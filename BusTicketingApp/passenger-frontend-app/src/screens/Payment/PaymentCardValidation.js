import React, {useState} from "react";
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

const PaymentCardValidation= () => {

    const navigation = useNavigation();

    const [cardNumber, setCardNumber] = useState("");

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    }


    const handleSubmit = () => {

        const data = {
            cardNumber: cardNumber
        }
    }

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
                            <Image source={require('../../assets/images/login/Credit-Card.gif')} resizeMode={'contain'}
                                   style={{width: '100%', height:160, marginBottom:10}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.formLabel}>Enter Method Type</Text>
                        <TextInput
                            style={styles.textInput}
                            name="cardNumber"
                            id="cardNumber"
                            onChange={onChangeCardNumber}
                            placeholder="Choose Method Type "/>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("AddPayment")
                            handleSubmit()
                        }} style={styles.defaultButton}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>NEXTt</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <View style={{height: 1, backgroundColor: '#ddd', width: '100%',marginTop:30}}></View>
                    </View>
                    <View style={styles.container}>
                        <ImageBackground style={styles.bottomBg}
                                         source={require('../../assets/images/login/cardtypes.png')}/>
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
        height: 50
    },
    formLabel:{
        marginBottom:10,
        fontWeight:'600',
        color:'#0c4a6e'
    },
    bottomBg: {
        width: '100%',
        height: 50,
        marginTop:20
    },formInput: {
        marginTop: 0,
        padding: 10,
    }, textInput: {
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 50,
        backgroundColor: '#e5e5e5',
        textAlign:"center"
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#0ea5e9',
        borderRadius: 10,
        marginTop:20
    }
});
export default PaymentCardValidation;