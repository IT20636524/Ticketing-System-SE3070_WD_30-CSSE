import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/appointment.png')} style={styles.img} />
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/appointment.png')} style={styles.img} />
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/appointment.png')} style={styles.img} />
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/appointment.png')} style={styles.img} />
          <Text>index</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f7fe',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gray'
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  item: {
    width: '40%',
    backgroundColor: '#fff',
    margin: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  img: {
    width: 100,
    height: 100
  }
});