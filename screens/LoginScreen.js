import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { authentication } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login_Handle = ({ }) => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                navigation.navigate('Dashboard', { user: userCredential })
            })
            .catch((err) => {
                console.log(err)
                Alert.alert("Done")
            })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Log In</Text>
            <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <View style={{ flexDirection: 'row' }}>
                <Text> Do Not Have Account?</Text>
                <Text style={{ color: 'blue'}} onPress={()=>navigation.navigate("RegistrationScreen")}> Register</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={Login_Handle}>
                <Text style={styles.btntext}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;


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