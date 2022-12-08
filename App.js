import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Authentication/LoginScreen';
import RegistrationScreen from './screens/Authentication/RegistrationScreen';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import "@react-native-async-storage/async-storage"
import Basic from './screens/Authentication/Basic';
import Dashboard from './screens/Dashboard';
import { authentication } from './firebase';
import Chat from './screens/Message/Chat';
import SearchRide from './screens/Ride Screens/SearchRide';
import LiveLocation from './components/Location/LiveLocation';
import CreateRide from './screens/Ride Screens/CreateRide';
import DocVerification from './screens/Authentication/DocVerification';
import ForgotPassword from './screens/Authentication/ForgotPassword';
import DriverRegistration from './screens/Authentication/DriverRegistration';
import License from './screens/Verification Screens/License';
import Cnic from './screens/Verification Screens/Cnic';
import Vehicle from './screens/Verification Screens/Vehicle';
import OtpScreen from './screens/Authentication/OtpScreen';


export default function App() {

  const Stack = createStackNavigator();
  const [isSignedIn, setIsSignedIn] = useState(true);

  onAuthStateChanged(authentication, (user) => {
    if (user) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {
            isSignedIn
              ?
              <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false, headerLeftLabelVisible:false }} />
                <Stack.Screen name='Chat' component={Chat} options={[({ route }) => ({title: route.params.userName,headerBackTitleVisible: false,}),{ headerLeftLabelVisible:false}]} />
                <Stack.Screen name='SearchRide' component={SearchRide}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='LiveLocation' component={LiveLocation}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='Create Ride' component={CreateRide}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='Doc Verification' component={DocVerification}  options={{headerLeftLabelVisible:false}} />
                <Stack.Screen name='Forget Password' component={ForgotPassword}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='Driver Registration' component={DriverRegistration}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='License' component={License}  options={{headerLeftLabelVisible:false}} />
                <Stack.Screen name='Basic' component={Basic}  options={{headerLeftLabelVisible:false}} />
                <Stack.Screen name='CNIC' component={Cnic} options={{headerLeftLabelVisible:false}} />
                <Stack.Screen name='Vehicle' component={Vehicle}  options={{headerLeftLabelVisible:false}} />
              </Stack.Navigator>
              :
              <Stack.Navigator>               
                <Stack.Screen name='LoginScreen' component={LoginScreen}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='Input Otp' component={OtpScreen}  options={{headerLeftLabelVisible:false}}  />
                <Stack.Screen name='RegistrationScreen' component={RegistrationScreen}  options={{headerLeftLabelVisible:false}}  />
              </Stack.Navigator>
          }
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
