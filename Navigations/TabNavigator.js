import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RequestedRides from '../screens/Ride Screens/RequestedRides';
import PostedRides from '../screens/Ride Screens/PostedRides';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false}}>
            <Tab.Screen name='Requested Rides' component={RequestedRides} options={{tabBarIcon: ()=>(
                <Ionicons name='car' color={'blue'} size={28} ></Ionicons>
            ) }}/>

            <Tab.Screen name='Posted Rides' component={PostedRides} options={{tabBarIcon: ()=>(
                <Ionicons name='body' color={'blue'} size={28}></Ionicons>
            )}}/>
        </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})