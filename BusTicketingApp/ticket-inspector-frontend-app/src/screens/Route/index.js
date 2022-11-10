import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 300,
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
    borderRadius: 12
  }
});



const RouteScreen = ({ navigation }) => {
  const [routesindex, setRoutesindex] = useState("")
  const [routes, setRoutes] = useState([{
    "_id": "6364f6cc5dba8ead567d68cc",
    "journeyId": "JID-1",
    "startFrom": "Colombo",
    "endsAt": "Kuliyapitiya",
    "cities": [
      {
        "city": "kadana",
        "price": "100.00"
      },
      {
        "city": "wattala",
        "price": "150.00"
      },
      {
        "city": "Negombo",
        "price": "170.00"
      }
    ],
    "journeyType": "one-way",
    "created_at": "2022-11-04T11:26:04.698Z",
    "updated_at": "2022-11-04T11:26:04.698Z"
  }]);
  const [route, setroute] = useState(routes[0]);

  //navigate home page
  const selectRoute = async () => {
    await storeData();
    navigation.navigate('Home')
  }

  //get journey list
  const getData = () => {
    axios.get(`http://192.168.1.104:3001/api/journey`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
        setRoutes(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  useEffect(() => {
    getData()
  }, [])


  //store journey in AsyncStorage
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(route)
      await AsyncStorage.setItem('@route', jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 30, fontSize: 18 }}>Select the route :</Text>
      <Picker
        style={styles.picker}
        selectedValue={routesindex}
        onValueChange={(itemValue, itemIndex) => {
          setroute(routes[itemValue])
          setRoutesindex(itemValue)
        }} >
        {routes.map((d, i) => {
          return (
            <Picker.Item label={d.startFrom + " - " + d.endsAt} value={i} key={i} />
          )
        })}
      </Picker>
      <Button
        title="Select"
        onPress={selectRoute} />
    </View>
  );
};
export default RouteScreen;
