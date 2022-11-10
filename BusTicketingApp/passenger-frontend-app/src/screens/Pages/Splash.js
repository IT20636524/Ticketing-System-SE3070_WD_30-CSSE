import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../../assets/images/background/background_intro.png");



const Splash =  (props) => {

  const onPress = () => {
    props.navigation.navigate('Home');
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../../assets/images/background/getbtn.png")} style={styles.get}></Image>
    </TouchableOpacity>
  </ImageBackground>
  );
   
 
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  get: {   
    marginTop:600
  },
});

export default Splash;