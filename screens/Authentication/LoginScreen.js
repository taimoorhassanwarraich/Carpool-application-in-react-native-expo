import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { authentication } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { primary } from '../../style/styles';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone]= useState('');
    const toRegistration =()=>{
        navigation.navigate('RegistrationScreen')
    }
    const onChangePhone=(number)=>{
        setPhone(number)
    }
    const Login_Handle = ({ }) => {
        // navigation.navigate('Input Otp')
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                navigation.navigate('Dashboard', { user: userCredential })
            })
            .catch((err) => {
                console.log(err)
                Alert.alert("Done")
            })
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'}
  ]);

  return (
    <View style={styles.container}>
        <Image source={require('../../src/assets/Images/Hum-Sawar-icon.png')} style={{height:120, width:120, alignSelf:'center', borderRadius:100, marginTop:20}}>

        </Image>
        <View style={styles.card}>
            <Text style={styles.txt}>Login</Text>
            <Text style={{marginLeft:10, fontSize:18, fontWeight:'200'}}>Login to book or offer a ride</Text>
            <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:12, borderRadius:10, borderBottomWidth:1, alignItems:'center',}}>
                <TextInput placeholder='Email' style={styles.input} placeholderTextColor='black'  returnKeyLabel='true' value={email} onChangeText= {text => setEmail(text)}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:12, borderRadius:10, borderBottomWidth:1, alignItems:'center',}}>
                <TextInput placeholder='Password' style={styles.input} placeholderTextColor='black' returnKeyLabel='true' value={password} onChangeText= {text => setPassword(text)} />
            </View>

            {/* <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:12, borderRadius:10, borderBottomWidth:1, alignItems:'center',}}>
                <Text style={{flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize:20, marginTop:30}}>+92|</Text>
                <TextInput placeholder='3009876543' style={styles.input} placeholderTextColor='black' keyboardType='phone-pad' returnKeyLabel='true' />
            </View> */}
            
        </View>
        <View style={{ flexDirection: 'row', alignSelf:'center', marginTop:10 }}>
                <Text> Do Not Have Account?</Text>
                <Text style={{ color: 'blue'}} onPress={toRegistration}> Register</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={Login_Handle}>
                <Text style={styles.btntext}>Continue</Text>
            </TouchableOpacity>
        </View>
  )
    
        // <View style={styles.container}>
        //     <Text style={styles.txt}>Log In</Text>
        //     <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={text => setEmail(text)} />
        //     <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
        //     <View style={{ flexDirection: 'row' }}>
        //         <Text> Do Not Have Account?</Text>
        //         <Text style={{ color: 'blue'}} onPress={toRegistration}> Register</Text>
        //     </View>
        //     <TouchableOpacity style={styles.btn} onPress={Login_Handle}>
        //         <Text style={styles.btntext}>Log In</Text>
        //     </TouchableOpacity>
        // </View>
    
}

export default LoginScreen;


const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        margin:10,
        borderRadius:15,
        padding:10
    },
    container: {
        flex: 1,
    },
    input: {
        marginLeft:5,
        height:50,
        flex:1,
        fontWeight:'100',
        marginTop:30
    },
    btn: {
        marginTop: 10,
        backgroundColor: primary,
        alignSelf:'center',
        borderColor: 'pink',
        height: 60,
        width: 300,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:45
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
      margin: 10,
    }
})