import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';

const localimage = require("../../assets/images/background/myqrbg.png");


export default class MyQr extends Component {
  render() {
    return (
      <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <View style={styles.card}>
          <QRCode value='635fd031e93764e55a6209f8' size={250} />
          <View style={styles.name}>
            <Text style={styles.nameTxt}>635fd031e93764e55a6209f8</Text>
          </View>
        </View>
    </ImageBackground>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff"
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: '500'
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top:30
  }
});