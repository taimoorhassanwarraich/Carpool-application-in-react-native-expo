import { StyleSheet, Text, View , SafeAreaView ,KeyboardAvoidingView, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import MapView from 'react-native-maps'

const SearchRide = () => {
  return (
    <KeyboardAvoidingView style={styles.view}>
      <View style={{flex:0.2}}>
      <GooglePlacesAutocomplete  
      placeholder = "where from"
      placeholderTextColor = "white"
      styles= {styles.mapSearch}
      fetchDetail={true}
      returnKeyType={"search"}
      enablePoweredByContainer = {false}
      minLenght = {2}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en'
      }}
      nearbyPlacesApi = "GooglePlacesSearch"
      debounce={400}
      />

<GooglePlacesAutocomplete  
      placeholder = "where to"
      placeholderTextColor = "white"
      styles= {styles.mapSearch}
      fetchDetail={true}
      returnKeyType={"search"}
      enablePoweredByContainer = {false}
      minLenght = {2}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en'
      }}
      nearbyPlacesApi = "GooglePlacesSearch"
      debounce={400}
      />
</View>
    <MapView
      mapType= "mutedStandard"
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />    

      <Button title = "Search" style={styles.btn} >

      </Button>
    </KeyboardAvoidingView>
    
      
  )
}

export default SearchRide

const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'blue',
    
  },
  map:{
    flex:0.5,
  },
  btn:{
    height:50, 
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:4,
    borderColor:'black',
  },
  mapSearch:{
      textInput:{
        fontSize: 25,
        backgroundColor:'white',
        borderWidth:5,
        borderColor:'white',
        height: 55,
        margin: 5
      },
  }
})