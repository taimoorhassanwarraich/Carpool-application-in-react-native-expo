import RideCard from '../Ride Screens/RideCard'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { primary } from '../../style/styles'

const DriverHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16, fontWeight:'500', margin:10,}}>Recent Rides</Text>
      <ScrollView style={styles.card}>
      <Card/>
      <Card/>
      <Card/>
      </ScrollView>
    </View>
  )
}

const Card = () => {
  return (
    <View style={styles.main}>
      <View style={{flexDirection:'row'}}>
    <Image source={require('../../src/assets/Images/Taimoor-pic.png')} style={{height:80, width:80, borderRadius:50, margin:5,borderColor:primary, borderWidth:5}}/>
    <MaterialCommunityIcons name='star' color={'orange'} size={25} style={{alignSelf:'center'}}/>
    <MaterialCommunityIcons name='star' color={'orange'} size={25} style={{alignSelf:'center'}}/>
    <MaterialCommunityIcons name='star' color={'orange'} size={25} style={{alignSelf:'center'}}/>
    <MaterialCommunityIcons name='star' color={'orange'} size={25} style={{alignSelf:'center'}}/>
    <MaterialCommunityIcons name='star' color={'orange'} size={25} style={{alignSelf:'center'}}/>
     </View>
    <View style={{flexDirection:'row', borderBottomWidth:0.2, borderWidth:1, borderRadius:20, width:350, margin:5}}>
        <FontAwesome name='location-arrow' size={20} style={{margin:5}} color={primary}></FontAwesome>
        <Text style={{fontSize:20, margin:5}}>Pak Secteriate, Islamabad</Text>
    </View>

    <View style={{flexDirection:'row', borderWidth:1,  borderRadius:20, width:350, margin:5}}>
        <Ionicons name='location' size={20} style={{margin:5,}} color={primary}></Ionicons>
        <Text style={{fontSize:20, margin:5}}>Air University, Islamabad</Text>
    </View>

    <View style={{flexDirection:'row', borderBottomWidth:1, justifyContent:'space-between'}}>
      <Text style={{margin:5}}>01 DEC 2022</Text>
        <MaterialCommunityIcons name='seat' color={primary} size={20} style={{margin:5, marginRight:15}}>
          <Text>1</Text>
        </MaterialCommunityIcons>
    </View>
    </View>
  )
}

export default DriverHistory

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  main:{
  flex:1,
  backgroundColor:'white',
  padding:10,
  borderRadius:10,
  marginBottom:5
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
  card:{
    margin:10,
    borderRadius:10,
    marginBottom:30,

  },
})


