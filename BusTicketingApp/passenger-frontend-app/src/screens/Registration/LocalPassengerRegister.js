import React, {useState} from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import {useNavigation} from "@react-navigation/core";
import AuthService from "../../services/authService";

const LocalRegister = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async () => {
        const data = {
            user: {
                role: "LOCALPASSENGER",
                name: name,
                email: email,
                password: password,
                contactNumber: contactNumber
            },
            specificData: {
                nic: nic,
                address: address
            }
        }

        console.log(data)

        await AuthService.register(data)
            .then(res => {
                navigation.navigate("Login")
                ToastAndroid.show("Registration Successfully!", ToastAndroid.SHORT);
            }).catch(err => {
                ToastAndroid.show("Registration Failed!", ToastAndroid.SHORT);
                console.log(err.message)
            });
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
                            <Image source={require('../../assets/images/login/ticketsystem.webp')}
                                   resizeMode={'contain'}
                                   style={{width: '100%', height: 120}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="name"
                            id="name"
                            // onChange={onChangeName}
                            onChangeText={text => setName(text)}

                            placeholder="Your Full Name"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="email"
                            id="email"
                            // onChange={onChangeEmail}
                            onChangeText={text => setEmail(text)}

                            placeholder="Your email address"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="password"
                            id="password"
                            // onChange={onChangePassword}
                            onChangeText={text => setPassword(text)}

                            placeholder="Password"
                            secureTextEntry={true}/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="contactNumber"
                            id="contactNumber"
                            // onChange={onChangeContactNumber}
                            onChangeText={text => setContactNumber(text)}

                            placeholder="Your Contact Number"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="address"
                            id="address"
                            // onChange={onChangeAddress}
                            onChangeText={text => setAddress(text)}
                            placeholder="Your Address"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="nic"
                            id="nic"
                            onChangeText={text => setNic(text)}
                            // onChange={onChangeNic}
                            placeholder="Your NIC Number"/>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            // navigation.navigate("Register")
                            handleSubmit()
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
                                Have Account ? <Text style={{color: "#4287f5"}}>Login</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
        borderRadius: 20,
        backgroundColor: '#e5e5e5',
        textAlign: "center"
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#06b6d4',
        borderRadius: 10,
    }
});

export default LocalRegister;