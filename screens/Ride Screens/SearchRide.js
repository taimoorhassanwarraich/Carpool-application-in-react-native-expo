import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames';
import { selectOrigin, setDestination, setOrigin } from '../../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux'

const SearchRide = () => {
  const dispath = useDispatch();
  const origin = useSelector(selectOrigin);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView style={styles.searchCard}>

        <GooglePlacesAutocomplete
          placeholder= "From"
          placeholderTextColor="white"
          styles={styles.mapSearchTextHolder}
          fetchDetails={true}

          // onPress={(data, details = null) => {
          //   console.log(details)
          //   dispath(
          //     setOrigin({
          //       location: details.geometry.location,
          //       description: data.description,
          //     })
          //     );
          //     dispath(setDestination(null));
          // }}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLenght={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesApi="GooglePlacesSearch"
          debounce={400}
        />

        <GooglePlacesAutocomplete
          placeholder="where to"
          placeholderTextColor="white"
          styles={styles.mapSearchTextHolder}

          onPress={(data, details = null) => {
            console.log(details)
            // dispath(
            //   setOrigin({
            //     location: details.geometry.location,
            //     description: data.description,
            //   })
            //   );
            //   dispath(setDestination(null));
          }}


          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLenght={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesApi="GooglePlacesSearch"
          debounce={400}
        />

        <TouchableOpacity style={styles.btn}>
          <Text>Search</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      <MapView
        mapType="mutedStandard"
        style={styles.map}
        initialRegion={{
          latitude: origin.lat,
          longitude: origin.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        {origin?.lat && (
          <Marker
            coordinate={{
              latitude: origin.lat,
              longitude: origin.lng,
            }} 
            title="Origin"
            description={origin.add}
            identifier='origin'
            />
        )}
      </MapView>
    </SafeAreaView>
  )
}

export default SearchRide

const styles = StyleSheet.create({
  mainContainer: {

  },
  map: {
    height: 400,
    borderRadius: 5,
    borderWidth: 3,

  },
  searchCard: {
    backgroundColor: 'lightblue',
    padding: 3,
    margin: 4,
    borderRadius: 3
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  mapSearchTextHolder: {
    textInput: {
      fontSize: 18,
      backgroundColor: 'white',
      borderWidth: 5,
      borderColor: 'white',
      height: 55,
      margin: 5,
      marginTop: 5,

    },
    container: {
      flex: 0,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 5,
    },
  }

})