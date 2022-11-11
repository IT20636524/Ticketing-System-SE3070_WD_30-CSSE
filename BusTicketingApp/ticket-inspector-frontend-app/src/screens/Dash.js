
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text, TextInput } from "react-native";
import React, { useState } from 'react';

const localimage = require("../assets/images/mainbg.png");

const Dash = (props) => {

 
  const onPressqr = () => {
    props.navigation.navigate('Route');
  };

  return (

    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <TouchableOpacity onPress={onPressqr}>
        <Image source={require("../assets/images/btn1.png")} style={styles.pay}></Image>
      </TouchableOpacity>
    
</ImageBackground>

     

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  button: {
    margin: 10,
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },

  pay: {
    position: "absolute",
    width: 160,
    height: 155,
    left: -175,
    bottom: -170

  },


});

export default Dash;