import { StyleSheet, Text, TouchableOpacity, View , TextInput} from 'react-native'
import React, {useEffect} from 'react'
import {LiveLocation} from '../../components/Location/LiveLocation'
import { useDispatch, useSelector } from 'react-redux'


const Rides = ({navigation}) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate("LiveLocation")
      }}>
        <Text style={styles.btntxt}> Search </Text>
      </TouchableOpacity>
    </View>
  ) 
}

export default Rides

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'blue',
    height:35,
    width:150,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  btntxt:{
    color:'white',
    fontWeight:'bold'
  },
})
