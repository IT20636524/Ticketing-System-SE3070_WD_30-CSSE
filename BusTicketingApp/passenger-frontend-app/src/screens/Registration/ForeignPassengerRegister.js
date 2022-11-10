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

const ForeignRegister = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [passportNumber, setPassportNumber] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }
    const onChangePassportNumber = (e) => {
        setPassportNumber(e.target.value);
    };

    const handleSubmit = () => {

        const data = {
            name: name,
            password: password,
            email: email,
            contactNumber: contactNumber,
            passportNumber: passportNumber
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
                            <Image source={require('../../assets/images/login/ticketsystem.webp')} resizeMode={'contain'}
                                   style={{width: '100%', height: 120}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="name"
                            id="name"
                            onChange={onChangeName}
                            placeholder="Your Full Name"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="email"
                            id="email"
                            onChange={onChangeEmail}
                            placeholder="Your email address"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="password"
                            id="password"
                            onChange={onChangePassword}
                            placeholder="Password" secureTextEntry={true}/>
                    </View>
                    {/*<View style={styles.formInput}>*/}
                    {/*    <TextInput */}
                    {/*        style={styles.textInput}*/}
                    {/*        name="email"*/}
                    {/*        id="email"*/}
                    {/*        onChange={onChangeEmail}*/}
                    {/*        placeholder="Confirm Password" secureTextEntry={true}/>*/}
                    {/*</View>*/}
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="contactNumber"
                            id="contactNumber"
                            onChange={onChangeContactNumber}
                            placeholder="Your Contact Number" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="passportNumber"
                            id="passportNumber"
                            onChange={onChangePassportNumber}
                            placeholder="Your Passport Number" />
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            handleSubmit()
                            // navigation.navigate("Register")
                        }} style={styles.defaultButton}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <View style={{height: 1, backgroundColor: '#ddd', width: '100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Login")
                        }}>
                            <Text style={{color: "#737373", textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Already
                                Have Account ?<Text style={{color:"#4287f5"}}>Login</Text></Text>
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
        borderRadius: 20
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#06b6d4',
        borderRadius: 10,
    }
});

export default ForeignRegister;