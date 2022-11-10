import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}
          // key={value}
          onPress={() => navigation.navigate('MyQr')}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/qr-code.png')} style={styles.img} />
          <Text>My QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/transaction.png')} style={styles.img} />
          <Text>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/appointment.png')} style={styles.img} />
          <Text>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        // key={value}
        // onPress={() => setSelectedValue(value)}
        // style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Image source={require('../../assets/images/debit-card.png')} style={styles.img} />
          <Text>TopUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 50,
    justifyContent: 'center',
    marginTop: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gray'
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: '40%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  img: {
    width: 100,
    height: 100
  }
});