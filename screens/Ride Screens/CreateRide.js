import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { primary } from '../../style/styles';


const CreateRide = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [date, setDate] = useState('09-10-2021');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date)
    hideDatePicker();
  };
  const handle_navigation = () => {
    navigation.navigate('Driver Registration')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>

      <View style={{ flexDirection: 'row', margin: 5 }}>
        <Ionicons name='pricetag' size={24} color={primary} style={{ margin: 5, marginTop: 20, borderBottomWidth:1 }}></Ionicons>
        <TextInput style={styles.priceInput} placeholderTextColor='black' placeholder='Price' keyboardType='number-pad' />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name='car-seat' color={primary}  size={28} style={{ margin: 5, marginTop: 15 }}></MaterialCommunityIcons>
        <TextInput style={styles.seatInput} placeholderTextColor='black' placeholder='Seats' keyboardType='number-pad' />
      </View>
      <TextInput placeholder='Start Location' style={styles.travel} placeholderTextColor='black'></TextInput>
      <TextInput placeholder='Destination' style={styles.travel} placeholderTextColor='black'></TextInput>
      <TextInput placeholder={'Select Date'} style={styles.travel} placeholderTextColor='black' onPressOut={showDatePicker} editable={false} value={date}></TextInput>

      </View>
      {isVerified
        ?
        <TouchableOpacity style={styles.searchbtn} onPress={() => { navigation.goBack() }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Confirm</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.searchbtn} onPress={handle_navigation}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Confirm</Text>
        </TouchableOpacity>
      }




      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

export default CreateRide

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  },
  card:{
    backgroundColor:'white',
    margin:15,
    borderRadius:10,
    padding:10
  },
  priceInput: {
    height: 60,
    borderRadius: 5,
    margin: 5,
    padding: 5,
    alignContent: 'stretch',
    width: 300,
    backgroundColor: 'white',
    borderBottomWidth: 2

  },
  seatInput: {
    height: 60,
    borderRadius: 5,
    margin: 5,
    padding: 5,
    alignContent: 'stretch',
    width: 300,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 35
  },
  travel: {
    backgroundColor: 'white',
    height: 60,
    padding: 15,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 30,
    margin: 3,
  },
  datepicker: {
    backgroundColor: 'white',
    height: 60,
    padding: 25,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 30,
    margin: 3,
    width: 385,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 2
  },
  searchbtn: {
    height: 60,
    padding: 15,
    borderRadius: 30,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    marginTop: 50,
    width:300,
    alignSelf:'center'
  }
})