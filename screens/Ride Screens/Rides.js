import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RideCard from './RideCard'

const Rides = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex:0}}>
        <Text style={{margin:10, fontWeight:'bold'}}>Scheduled Rides:</Text>
      <RideCard />
      </View>
      <View style={styles.btn}>
      <TouchableOpacity  onPress={()=>{
        navigation.navigate("LiveLocation")
      }}>
        <FontAwesome5 name='search-location' color='white' size={40} onPress={()=>{navigation.navigate("Basic")}}/>
        <Text style={{color:'white'}}> Search Ride</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Rides

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