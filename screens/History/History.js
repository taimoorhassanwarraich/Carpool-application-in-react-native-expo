import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DriverHistory from './DriverHistory';
import PassengerHistory from './PassengerHistory';

const History = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
            <Tab.Navigator>
                <Tab.Screen name='Driver' component={DriverHistory} options={{tabBarStyle:{backgroundColor:'lightblue'}, tabBarActiveTintColor:"white"}}/>
                <Tab.Screen name='Passenger' component={PassengerHistory} options={{tabBarStyle:{backgroundColor:'lightblue',}, tabBarActiveTintColor:"white"}} />
            </Tab.Navigator>
  )
}

export default History

const styles = StyleSheet.create({})