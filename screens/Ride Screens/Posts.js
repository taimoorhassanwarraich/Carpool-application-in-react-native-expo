import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RideCard from './RideCard'

const Posts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:0}}>
        <Text style={{margin:10, fontWeight:'bold'}}>Posted Rides:</Text>
      <RideCard />
      <RideCard/>
      <RideCard/>
      </View>
      <View style={styles.btn}>
      <TouchableOpacity onPress={navigation.navigate('Create Ride')}>
        <MaterialIcons name='add-location-alt' color='white' size={50}/>
        <Text style={{color:'white'}}>Post Ride</Text>
      </TouchableOpacity>
      </View>

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
    backgroundColor:'blue',
    height:100,
    width:100,
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