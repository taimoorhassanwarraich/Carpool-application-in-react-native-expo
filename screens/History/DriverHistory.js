import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RideCard from '../Ride Screens/RideCard'

const DriverHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:0}}>
        <Text style={{margin:10, fontWeight:'bold'}}>Recent Rides:</Text>
      <RideCard />
      <RideCard/>
      <RideCard/>
      </View>
    </View>
  )
}

export default DriverHistory

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  btn:{
    backgroundColor:'blue',
    height:90,
    width:90,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:5,
    marginLeft:200,
    borderRadius:50

  },
  btntxt:{
    color:'white',
    height:50,
    width:50
  },
})