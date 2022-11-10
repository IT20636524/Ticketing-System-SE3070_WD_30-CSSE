import React, {useEffect, useState} from "react";
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
import AuthService from "../../services/authService";

const AddPayementCard = () => {
    const [cardType, setCardType] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [expirationDate, setExpirationDate] = useState("");


    const [currentUserId, setCurrentUserId] = useState("");
    useEffect(() => {
        const getAsyncStorageData = async () => {
            try {
                let user_id = await AuthService.getCurrentUserId();

                await setCurrentUserId(user_id);
            } catch (e) {
                console.log(e.message)
            }
        }

        getAsyncStorageData();
    }, []);

    const navigation = useNavigation();


    // const cardTypeList = [{
    //     value: 'Credit Card',
    // }, {
    //     value: 'Debit Card',
    // }];


    const onChangeCardType = (e) => {
        setCardType(e.target.value);
        console.log(e.target.value)
    };

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    };
    const onChangeCvc = (e) => {
        setCvc(e.target.value);
    }

    const onChangeExpirationDate = (e) => {
        setExpirationDate(e.target.value);
    }

    const handleSubmit = () => {

        const data = {
            userId:currentUserId,
            cardType: cardType,
            cardNumber: cardNumber,
            cvc: cvc,
            expirationDate: expirationDate,
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
                                   style={{width: '100%', height: 160, marginBottom: 10}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.formLabel}>Enter Card Type</Text>
                        {/*<TextInput*/}
                        {/*    style={styles.textInput}*/}
                        {/*    name="cardType"*/}
                        {/*    id="cardType"*/}
                        {/*    onChange={onChangeCardType}*/}
                        {/*    placeholder="Choose Card Type "/>*/}
                        {/*<Dropdown*/}
                        {/*    label='Choose Card Type'*/}
                        {/*    data={cardTypeList}*/}
                        {/*    onChangeText={onChangeCardType}*/}
                        {/*/>*/}
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.formLabel}>Enter Card Number</Text>
                        <TextInput
                            style={styles.textInput}
                            name="cardNumber"
                            id="cardNumber"
                            onChange={onChangeCardNumber}
                            placeholder="Enter Card Number"/>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.formLabel}>Enter CVC Number</Text>
                        <TextInput
                            style={styles.textInput}
                            name="cvc"
                            id="cvc"
                            onChange={onChangeCvc}
                            placeholder="Enter CVC Number "
                            secureTextEntry={true}/>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={styles.formLabel}>Enter Expiration Date</Text>
                        <TextInput
                            style={styles.textInput}
                            name="expirationDate"
                            id="expirationDate"
                            onChange={onChangeExpirationDate}
                            placeholder="Date / Month / Year"/>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            // navigation.navigate("Register")
                            handleSubmit()
                        }} style={styles.defaultButton}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>Save Card</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 5}}></View>
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
    formLabel: {
        marginBottom: 10,
        fontWeight: '600',
        color: '#0c4a6e'
    },
    bottomBg: {
        width: '100%',
        height: 50,
        marginTop: 20
    }, formInput: {
        marginTop: 0,
        padding: 10,
    }, textInput: {
        padding: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 50,
        backgroundColor: '#e5e5e5',
        textAlign: "center"
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#0ea5e9',
        borderRadius: 10,
        marginTop: 10
    }
});
export default AddPayementCard;