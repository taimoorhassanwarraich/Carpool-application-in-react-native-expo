import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RideCard from './RideCard'
import { primary } from '../../style/styles'

const Rides = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={{margin:10, fontWeight:'500', fontSize:22}}>Scheduled Rides</Text>
      <RideCard style={styles.card} />

      <TouchableOpacity  onPress={()=>{navigation.navigate("LiveLocation")}} style={styles.btn}>
        <FontAwesome5 name='search-location' color='white' size={40} onPress={()=>{navigation.navigate("Basic")}} style={styles.floatingbtn}/>
        {/* <Text style={{color:'white'}}> Search Ride</Text> */}
      </TouchableOpacity>


    </View>
  )
}

export default Rides

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  card:{
    backgroundColor:'white',
    margin:15
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
  floatingbtn:{
    resizeMode:'contain'
  }
})