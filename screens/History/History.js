import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DriverHistory from './DriverHistory';
import PassengerHistory from './PassengerHistory';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primary } from '../../style/styles';

const History = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
            <Tab.Navigator>
                <Tab.Screen name='Driver' component={DriverHistory} options={{tabBarStyle:{backgroundColor:'lightblue', borderRadius:20, margin:5, width:250, alignSelf:'center', height:70, }, tabBarActiveTintColor:"black",tabBarIcon: ()=>(
                <Ionicons name='body' color={primary} size={28}/>
            )}}/>
                <Tab.Screen name='Passenger' component={PassengerHistory} options={{tabBarStyle:{backgroundColor:'lightblue', borderRadius:20, margin:5, width:250, alignSelf:'center', height:70,}, tabBarActiveTintColor:"black", tabBarIcon: ()=>(
                <Ionicons name='car' color={primary} size={28}/>
            )}} />
            </Tab.Navigator>
  )
}

export default History

const styles = StyleSheet.create({})