import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { useDispatch, useSelector } from 'react-redux'
import { setOrigin } from '../../slices/navSlice'
import SearchRide from '../../screens/Ride Screens/SearchRide'




const LiveLocation = ({navigation}) => {

    const [location, setLocation] = useState();
    const [name, setName] =useState();
    const [errorMsg, setErrorMsg] = useState(null);
    const dispath = useDispatch();
  useEffect(() => {
    ( async() => {
      
      let { status } =  Location.requestForegroundPermissionsAsync()

      if (status = 'granted') {
        console.log('Success')
      }else{
        console.log("No Success")
      }
    
      const loc = await Location.getCurrentPositionAsync({});
      const add = (await Location.reverseGeocodeAsync(loc.coords))

      for (let item of add){
      const address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}, ${item.country}, `
      }
      setLocation(loc);
      console.warn(loc)
      console.warn(add)
      dispath(
        setOrigin({
          lat: loc.coords.latitude,
          lng: loc.coords.longitude,
        })
        );
    })();
  }, []);

//   let text = 'Waiting..';
//   if (errorMsg) {
//     console.log(errorMsg)
//     text = errorMsg;
//   } else if (location) {
//   }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{JSON.stringify(location)}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("SearchRide")}>
        <Text>Go To Maps</Text>
      </TouchableOpacity>
    </View>
  );

//   let {status} = Location.requestForegroundPermissionsAsync();

//   if (status !== "granted"){
//     console.log('not worked')
//     Alert.alert(
//         "permission not Granted",
//         "Allow he App to use the Location Service.",
//         [{
//             text:'Ok'
//         }],
//         {cancelable:false}
//     );
//   }
//   let {coords} = Location.getCurrentPositionAsync();

//   if (coords){
//     const {latitude, longitude} = coords;
//     let response = Location.geocodeAsync({
//         latitude,
//         longitude,
//     });
//     for(let item of response){
//         let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
//         alert(address)
//         console.log(address)
//     }
//   }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default LiveLocation;