
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button,ImageBackground, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const localimage = require("../../assets/images/scanbg.png");

export default function BarCodeScan(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [issucess, setIssucess] = useState(0);
  const [cities, setCities] = useState([{
    city: "kadana",
    price: "100.00"
  }, {
    city: "kadana",
    price: "100.00"
  }]);
  const [city, setCity] = useState(cities[0].price);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };
  //Request Camera permission
  useEffect(() => {
    getStorage()
    setHasPermission(null);
    askForCameraPermission();
  }, []);
  //What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    axios.get(`http://172.28.2.10:3001/api/account/get/user/${data}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        // handle success
        console.log(response.data.data[0].totalBalance);
        console.log(city);

        if (response.data.data[0].totalBalance >= city) {
          axios.put(`http://172.28.2.10:3001/api/account/update/${data}`, { totalBalance: response.data.data[0].totalBalance - city })
            .then(function (response) {
              // handle success
              console.log(response.data.data);
              setText("Pay for Success");
              setIssucess(1);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        } else {
          setText("payment faild");
          setIssucess(2);
        }

      })
      .catch(function (error) {
        console.log("sasasddd");
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    console.log("Type : " + type + "\nData" + data);
  };

  const getStorage = async () => {
    console.log('asdass');
    const jsonValue = await AsyncStorage.getItem('@route')
    const data = jsonValue != null ? JSON.parse(jsonValue) : null
    setCities(data.cities)
    console.log(cities);
  };
  //Check permission and return the screens
  if (hasPermission === null) {
    return (
      <ImageBackground source={localimage} resizeMode='cover' style={{ flex: 1, alignItems: "center", justifyContent: "center",  alignItems: "center" }}>
        <View >
        <Text>Requesting for camera permission</Text>
      </View>
      </ImageBackground>
    
    );
  }
  //works
  if (hasPermission === false) {
    return (
      <ImageBackground source={localimage} resizeMode='cover' style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: "center" }}>
      <View >
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        ></Button>
      </View>
      </ImageBackground>
    );
  }
  //Return the View
  return (
    <ImageBackground source={localimage} resizeMode='cover' style={{ flex: 1, alignItems: "center", justifyContent: "center", alignItems: "center"}}>
    <View >
      <Text style={{ fontSize: 18, marginBottom: 10, top:50 }}>{city}</Text>
      <Picker
        style={styles.picker}
        selectedValue={city}
        onValueChange={(itemValue, itemIndex) =>
          setCity(itemValue)
        } >
        {cities.map((city) => {
          console.log(city);
          return (
            <Picker.Item label={city.city} value={city.price} />
          )
        })}


      </Picker>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <View style={{height:100}}>
      {issucess == 1 ? <Image source={require('../../assets/images/scanbtn.png')} style={{height:100, width:200,top:50,left:30}} /> : null}
      {issucess == 2 ? <Text style={styles.maintexta}>Payment failed</Text> : null}

     
      
      </View>
      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)}>
      <Image source={require("../../assets/images/scn.png")} style={{top:70,left:10}}></Image>
    </TouchableOpacity>
      
        
      )}
    </View>  
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 250,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
    top:30
  },
  maintext: {
    fontSize: 20,
    margin: 30,
    color: "#000",
    top:50
  },
  maintexta: {
    fontSize: 20,
    margin: 30,
    color: "#000",
    top:50
  },
  picker: {
    height: 50,
    width: 200,
    backgroundColor: '#fff',
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    top:50
  },
  scanbtn:{
    top: 10,
  }
});
