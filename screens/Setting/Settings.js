import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const Settings = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <ScrollView>
      <BtnCard></BtnCard>
      <BtnCard1></BtnCard1> 
      <BtnCard2></BtnCard2>
      <BtnCard3></BtnCard3>
      <BtnCard4></BtnCard4>
    </ScrollView>
    <TouchableOpacity style={{backgroundColor:'white', width:200, height:60, justifyContent:'center', alignItems:'center', borderRadius:7, alignSelf:'center', marginBottom:50}}>
      <Text style={{fontWeight:'bold', color:'red'}}>
        Delete My Accounts
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const BtnCard =({text})=>{
  const [mode, setMode] = useState(false)
  return(
    <View style={styles.card}>
    <Text style={styles.cardtxt}>Dark Mode</Text>
    <Switch style={styles.switch} value={mode} onValueChange={()=>setMode((value)=!value)}></Switch>
    
    </View>
  )
}

const BtnCard1 =({text})=>{
  const [mode, setMode] = useState(false)
  return(
    <View style={styles.card}>
    <Text style={styles.cardtxt}>Language</Text>

    </View>
  )
}
const BtnCard2 =({text})=>{
  const [mode, setMode] = useState(false)
  return(
    <View style={styles.card}>
    <Text style={styles.cardtxt}>Privacy</Text>

    </View>
  )
}
const BtnCard3 =({text})=>{
  const [mode, setMode] = useState(false)
  return(
    <View style={styles.card}>
    <Text style={styles.cardtxt}>Help</Text>

    </View>
  )
}
const BtnCard4 =({text})=>{
  const [mode, setMode] = useState(false)
  return(
    <View style={styles.card} >
    <Text style={styles.cardtxt}>Complaints/Suggestions</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  card:{
    flex:1,
    height:70,
    backgroundColor:'white',
    padding:20,
    margin:5,
    borderRadius:5,
    flexDirection:'row',
  },
  cardtxt:{
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    
  },
  switch:{
    backgroundColor:'white',
    marginLeft:200
  },
  mainContainer:{
    flex:1,
    backgroundColor:'lightblue'
  }
})