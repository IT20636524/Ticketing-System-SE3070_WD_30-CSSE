
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text, TextInput, Alert } from "react-native";
import React, { useState } from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import axios from 'axios';

const localimage = require("../../assets/images/background/background_main.png");

const Home = (props) => {

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const [isVisible, setIsVisible] = useState(false);

  async function handleSave() {
    var data = {
      "name":name,
      "nic":nic,
      "username":username,
      "password":password
      
    }

  
  await axios({
    url:"http://localhost:5000/api/passengers",
      method:"POST",
      data : data,
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      }
     
    })
      .then(function (response) {
        // handle success
        console.log(response);
        setName("")
        setNic("")
        setPassword("")
        setUsername("")
        Alert.alert("added");
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setName("")
        setNic("")
        setPassword("")
        setUsername("")
        Alert.alert("added");
      })
    
    }
  

  const onChangeName = (value) =>{
    setName(value);
  }
  const onChangeUsername = (value) =>{
    setUsername(value);
  }
  const onChangeNic = (value) =>{
    setNic(value);
  }
  const onChangePassword = (value) =>{
    setPassword(value);
  }



 
  const list = [
   
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white',left:150, fontSize: 20 },
      onPress: () => setIsVisible(false),
    },
    {
      title: 'Register',
      containerStyle: { backgroundColor: 'green' },
      titleStyle: { color: 'white', left:150, fontSize: 20},
      onPress: () => handleSave(),
    },
  ];

  const onPressqr = () => {
    props.navigation.navigate('MyQr');
  };



  return (

    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image source={require("../../assets/images/background/regbtn.png")} style={styles.reg}></Image>

      </TouchableOpacity>
      <BottomSheet modalProps={{}} isVisible={isVisible} >
        
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
              <Text style={styles.headerText}>                Create an Acount</Text>
             
              </ListItem.Title>
              <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>    Name       </Text>
                  <TextInput style={styles.textInput} placeholder='Enter Name'  onChangeText={onChangeName}/>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>    NIC          </Text>
                  <TextInput style={styles.textInput} placeholder='Enter NIC'  onChangeText={onChangeNic}/>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>    UserName</Text>
                  <TextInput style={styles.textInput} placeholder='Enter UserName'  onChangeText={onChangeUsername}/>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.labelText}>    Password  </Text>
                  <TextInput style={styles.textInput} placeholder='Enter Password'  onChangeText={onChangePassword}/>
                </View>
             
            </ListItem.Content>
           
          </ListItem>

          {list.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={l.containerStyle}
          onPress={l.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        ))}
      </BottomSheet>


      <TouchableOpacity >
        <Image source={require("../../assets/images/background/pay.png")} style={styles.pay}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/images/background/schedule.png")} style={styles.event}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressqr}>
        <Image source={require("../../assets/images/background/qr.png")} style={styles.donor}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/images/background/balance.png")} style={styles.balance}></Image>
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
  reg: {
    right: -80,
    bottom: 60
  },
  pay: {
    position: "absolute",
    width: 160,
    height: 155,
    left: -175,
    bottom: -120

  },
  event: {
    position: "absolute",
    width: 160,
    height: 155,
    right: -172,
    bottom: -120


  },
  donor: {
    position: "absolute",
    width: 160,
    height: 155,
    left: -175,
    bottom: -300,
    borderRadius: 10

  },
  balance: {
    position: "absolute",
    width: 160,
    height: 155,
    right: -172,
    bottom: -300


  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"flex-start",
    justifyContent:"flex-end"
},

textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: 250,
    padding: 5,
    margin: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    borderRadius: 8,
    left:10

},

headerText: {
    Color: 'black',
    fontSize: 25,
    textShadowColor:"black",
    textAlign:"center",
  
},
labelText: {
    fontSize: 18,
    top:15   
},


});

export default Home;