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
    View,
} from "react-native";
import {useNavigation} from "@react-navigation/core";
import AuthService from "../../services/authService";

const Login = () => {
    const navigation = useNavigation();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        setMessage("");
        setLoading(true);

        const data = {
            email: email,
            password: password
        }

        if (email != null && password != null) {
            await AuthService.login(data)
                .then((res) => {
                        if (AuthService.getCurrentUserToken()) {
                            navigation.navigate("PaymentHome")
                        }
                    },
                    error => {
                        const userMessage = "Username or Password Incorrect!";
                        const resMessage = (error.response && error.response.data.message && error.response.data) || userMessage || error.message || error.toString();
                        console.log(error.message)
                        setLoading(false);
                        setMessage(resMessage);
                    }
                );
        } else {
            setLoading(false);
            console.log("EMPTY EMAIL & PASSWORD")
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                     source={require('../../assets/images/login/bgauth.jpg')}/>
                </View>
                <View style={{padding: 10, backgroundColor: '#fff', height: "100%"}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/login/ticketsystem.webp')}
                                   resizeMode={'contain'}
                                   style={{width: '100%', height: 180}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="email"
                            id="email"
                            onChangeText={text => setEmail(text)}
                            placeholder="Enter Your Email Address"
                            textAlign="center"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.textInput}
                            name="password"
                            id="password"
                            onChangeText={text => setPassword(text)}
                            placeholder="Enter Your Password"
                            textAlign="center"

                            secureTextEntry={true}/>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Forget")
                        }}>
                            <Text style={{
                                color: "#004282",
                                textAlign: 'right',
                                fontSize: 14,
                                fontWeight: 'bold',
                                marginRight: 30,
                                marginTop: -10
                            }}>Forgot
                                password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            handleSubmit()
                        }} style={styles.defaultButton}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{height: 1, backgroundColor: '#ddd', width: '100%', marginTop: 25}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("UserSelection")
                        }}>
                            <Text style={{
                                color: "#737373",
                                textAlign: 'center',
                                fontFamily: 'sans-serif',
                                fontSize: 16,
                                fontWeight: 'bold',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>Need An
                                Account ? <Text style={{color: "#4287f5", marginLeft: 10, marginTop: -25}}> Register
                                    Now</Text></Text>

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
        borderRadius: 50,
        backgroundColor: '#e5e5e5'
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#0ea5e9',
        borderRadius: 10,
    }
});

export default Login;
