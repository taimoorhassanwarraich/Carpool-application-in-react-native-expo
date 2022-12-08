import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { primary } from '../../style/styles'

const RideCard = () => {
  return (
    <View style={styles.main}>
    <View style={{borderBottomColor:'black', borderBottomWidth:1}}>
      <Text>Posted: 2 Days ago</Text>
    </View>

    <View style={{flexDirection:'row'}}>
        <FontAwesome name='location-arrow' size={20} style={{margin:5}} color={primary}></FontAwesome>
        <Text style={{fontSize:20}}>Pak Secteriate, Islamabad</Text>
    </View>

    <View style={{flexDirection:'row', borderBottomWidth:1}}>
        <Ionicons name='location' size={20} style={{margin:5}} color={primary}></Ionicons>
        <Text style={{fontSize:20}}>Air University, Islamabad</Text>
    </View>

    <View style={{flexDirection:'row', borderBottomWidth:1}}>
        <MaterialCommunityIcons name='car-seat' color={primary} size={20} style={{margin:3}}></MaterialCommunityIcons>
        <Text style={{fontSize:20,margin:1, borderRightWidth:2  }}> 2</Text>
        <MaterialCommunityIcons name='ticket-confirmation' color={primary} size={20} style={{margin:3, borderLeftWidth:1, borderLeftColor:'black'}}></MaterialCommunityIcons>
        <Text style={{fontSize:20,margin:1, borderRightWidth:2  }}> 1</Text>
        <Text style={{fontSize:15,marginLeft:90, color:"red"}}> Starts : Dec 10, 10.00am</Text>
    </View>
    </View>
  )
}

export default RideCard

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        margin:7,
        height:150,
        width:370,
        padding:5,
        justifyContent:'space-between',
    },

})