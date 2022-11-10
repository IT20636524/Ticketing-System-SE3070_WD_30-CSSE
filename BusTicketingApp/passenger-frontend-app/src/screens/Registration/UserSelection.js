

import React from "react";
// import {CardView} from "react-native-simple-card-view";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CardView} from "react-native-simple-card-view";
import { CardViewWithIcon } from 'react-native-simple-card-view'
import {useNavigation} from "@react-navigation/core";

function UserSelection() {

    const navigation = useNavigation();
    return(

        <View style={{backgroundColor: "#22d3ee",width:'100%',height:'100%',alignItems:'center',justifyContent: 'center'}}>
        <Image source={require('../../assets/images/login/ticketsystem.webp')} style={{width: 250, height: 200}}/>
        <CardView onPress={ () => console.log("Clicked!") }>


            <View >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("LocalRegister")
                }} style={styles.defaultButton}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#fff',backgroundColor:'#0000FF'}}>Local Passenger</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("ForeignRegister")
                }} style={styles.defaultButton}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'fff' ,backgroundColor:'#0000FF'}}>Foreign Passenger</Text>
                </TouchableOpacity>
            </View>





            <View style={styles.formInput}>
                <View style={{height: 1, backgroundColor: '#ddd', width: '100%'}}></View>
            </View>



          
        </CardView>
        </View>


    )

}

export default UserSelection
const styles = StyleSheet.create({

        formInput: {
        marginTop: 10,
        padding: 10,
    },

});


