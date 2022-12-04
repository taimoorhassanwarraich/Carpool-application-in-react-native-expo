import { StyleSheet, Text, TouchableOpacity, View , TextInput} from 'react-native'
import React, {useEffect} from 'react'
import {LiveLocation} from '../../components/Location/LiveLocation'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Rides = ({navigation}) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate('Create Ride')
      }}>
        <Ionicons name='add' style={styles.btntxt} size={50}>
          <Text style={{color:'white'}}>Search</Text>
        </Ionicons>
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
    height:90,
    width:90,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:210,
    marginTop:500,
    borderRadius:50

  },
  btntxt:{
    color:'white',
    height:50,
    width:50
  },
})
