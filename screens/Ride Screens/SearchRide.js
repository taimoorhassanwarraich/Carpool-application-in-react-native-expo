import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames';
import { selectOrigin, setDestination, setOrigin } from '../../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux'
import { SelectList } from 'react-native-dropdown-select-list'

const SearchRide = () => {
  const data = [
    { key: '1', value: 'Any', },
    { key: '2', value: 'Male' },
    { key: '3', value: 'Female (Pink)' },
  ]
  const dispath = useDispatch();
  const origin = useSelector(selectOrigin);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchCard}>

        <GooglePlacesAutocomplete

          placeholder="From"
          styles={styles.mapSearchTextHolder}
          fetchDetails={true}

          onPress={(data, details = null) => {
            console.log(details)
            dispath(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispath(setDestination(null));
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

        <GooglePlacesAutocomplete
          placeholder="where to"
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
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btn}>
            <Text>Search</Text>
          </TouchableOpacity>
          <SelectList
            placeholder='Gender'
            setSelected={(val) => setVehicleType(val)}
            data={data}
            onSelect={() => alert(selected)}
            save="value"
            label="Select Model"
          />
          
        </SafeAreaView>
      </View>
      <SafeAreaView>

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
            description={origin.description}
            identifier='origin'
          />
        )}
      </MapView>
      </SafeAreaView> 
    </View>
  )
}

export default SearchRide

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  map: {
    height: 400,
    borderRadius: 5,
    borderWidth: 3,

  },
  searchCard: {
    flex: 0.6,
    padding: 3,
    margin: 4,
    borderRadius: 3,
    justifyContent: 'space-between',
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 4,
    borderColor: 'black',
    alignSelf: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:40
  },
  mapSearchTextHolder: {
    textInput: {
      fontSize: 18,
      height: 55,
      margin: 5,
      marginTop: 5,

    },
    container: {
      flex: 0,
      borderRadius: 5,
      borderWidth: 1,
    },
  }

})