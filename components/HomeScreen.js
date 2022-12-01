import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import ForgotPassword from './ForgotPassword'
import { authentication, db, } from '../firebase';
import { getDoc, doc, } from "firebase/firestore";
import { TextInput } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')


  useEffect(() => {     
    const id = authentication.currentUser.uid;
  getDoc(doc(db, "users", id))
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        const userData = documentSnapshot.data()
        setName(userData.name)
        setAge(userData.age)
        setPhone(userData.phone)
        setGender(userData.gender)
        setEmail(userData.email)
      }
    })
    });
    

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.container}>
        <TouchableOpacity onPress={ForgotPassword}>
          <Text>
            {name} {phone} {email}
          </Text>
          <Text>
            {age} {gender}
          </Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: 15
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain"
  },
  icon: {
    flex: 1,
    fontSize: '16px',
    color: 'blue'
  }
})