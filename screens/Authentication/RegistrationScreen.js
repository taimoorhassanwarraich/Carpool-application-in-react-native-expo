import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import React , {useState} from 'react';
import { authentication } from '../../firebase';
import {createUserWithEmailAndPassword,} from 'firebase/auth';
import { primary } from '../../style/styles';
import DropDownPicker from 'react-native-dropdown-picker';

const RegistrationScreen = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'}
  ]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');


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
        <Image source={require('../../src/assets/Images/Hum-Sawar-icon.png')} style={{height:120, width:120, alignSelf:'center', borderRadius:100, marginTop:20}}>

        </Image>
        <View style={styles.card}>
            <Text style={styles.txt}>Sign Up</Text>
            <Text style={{marginLeft:10, fontSize:18, fontWeight:'200'}}>Sign Up to explore the great features this App has to offer</Text>
            <TextInput placeholder='Full Name' style={styles.input} value={firstName} placeholderTextColor='black' onChangeText={text => setFirstName(text)} />
            <DropDownPicker
            placeholder='Gender'
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{borderBottomWidth:1, borderWidth:0, paddingLeft:15, margin:5, height:50}}
            placeholderStyle={{}}
            />
            <TextInput placeholder='Phone' style={styles.input} value={phone} placeholderTextColor='black' onChangeText={text => setPhone(text)} />
            <TextInput placeholder='Email' style={styles.input} value={email} placeholderTextColor='black' onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' style={styles.input} value={password} placeholderTextColor='black' onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <TextInput placeholder='Confirm Password' style={styles.input} placeholderTextColor='black' value={confirmPassword} onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} />  
        </View>
        <View style={{ flexDirection: 'row', alignSelf:'center', marginTop:10 }}>
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
        height: 40,
        width: 350,
        margin: 5,
        borderBottomWidth: 3,
        borderColor: 'black',
        borderRadius: 5,
        padding: 15,
        borderBottomWidth:1
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