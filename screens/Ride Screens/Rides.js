import { StyleSheet, Text, TouchableOpacity, View , TextInput} from 'react-native'
import React from 'react'

const Rides = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SearchRide')}>
        <Text style={styles.btntxt}> Search Ride</Text>
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
