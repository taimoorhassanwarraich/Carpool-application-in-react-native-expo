import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import React , {useState} from 'react';
import { authentication } from '../firebase';
import {createUserWithEmailAndPassword, reauthenticateWithRedirect,} from 'firebase/auth';

const RegistrationScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const Register_Handle = ({})=>{

        createUserWithEmailAndPassword(authentication, email, password, name)
        .then((userCredential) => {
            navigation.navigate('CompleteRegistration')
        })
        .catch((re)=>{
            console.log(re);
        })
    }


  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Registration</Text>
            <TextInput placeholder='Full Name' style={styles.input} value={name} onChangeText={text => setName(text)} />
            <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <TextInput placeholder='Confirm Password' style={styles.input} value={confirmPassword} onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} />
            <View style={{ flexDirection: 'row' }}>
                <Text> Already Have Account?</Text>
                <Text style={{ color: 'blue'}} onPress={()=>navigation.navigate("LoginScreen")}> Log In</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={Register_Handle}>
                <Text style={styles.btntext}>Register</Text>
            </TouchableOpacity>
        </View>
  )
}

export default RegistrationScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        height: "8%",
        width: "80%",
        margin: 5,
        borderWidth: 3,
        borderColor: 'lightblue',
        borderRadius: 5,
        padding: 15,
    },
    btn: {
        marginTop: 15,
        backgroundColor: 'lightblue',
        borderColor: 'pink',
        borderWidth: 5,
        height: "8%",
        width: '40%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    signUpBtn: {
        color: 'blue',
        marginTop: 10,
    },
    txt:{
      fontWeight: 'bold',
      fontSize: 25, 
      margin: 20,
      marginTop: 20
    }
})