import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RideCard from './RideCard'
import { primary } from '../../style/styles'

const Posts = ({navigation}) => {
  const toRegistration =()=>{
    navigation.navigate('Create Ride')
  }
  return (
    <View style={styles.container}>
      <View style={{flex:0}}>
        <Text style={{margin:10, fontWeight:'bold'}}>Posted Rides:</Text>
      <RideCard />
      <RideCard/>
      <RideCard/>
      </View>
      <TouchableOpacity onPress={toRegistration} style={styles.btn}>
        <MaterialIcons name='add-location-alt' color={'white'} size={50}/>
      </TouchableOpacity>

    </View>
  )
}

export default Posts

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center'
  },
  btn:{
    backgroundColor:primary,
    height:100,
    width:100,
    alignItems:'center',
    justifyContent:'center',
    margin:15,
    borderRadius:50,
    alignSelf:'flex-end',
    position:'absolute',
    right:20,
    bottom:20
  },
  btntxt:{
    color:'white',
    height:50,
    width:50
  },
})