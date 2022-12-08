import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { authentication, db } from '../../firebase';
import "@react-native-async-storage/async-storage";
import { sendPasswordResetEmail } from 'firebase/auth';
import { primary } from '../../style/styles';


const Basic = ({ navigation }) => {

    const id = authentication.currentUser.uid
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')

    const Data = {
        name: fullName,
        age: age,
        phone: phone,
        email: email,
        gender: gender,

    };

    function sendData() {
        setDoc(doc(db, "users", id), Data)
            .then(() => {
                navigation.navigate("Dashboard")
            })
    }


    // function SendData(){
    //     const id = authentication.currentUser.uid
    //     const collectionRef = doc(db, "users", id);
    //     const payload = {
    //         name: fullName,
    //         age:age,
    //         phone:phone,
    //         email:email,
    //         gender:gender,
    //         };
    //      setDoc(collectionRef,payload);
    //      navigation.navigate("HomeScreen");
    //  }

    // const SendData = () => {
    //     const id = authentication.currentUser.uid;
    //     setDoc(doc(db, "users", id), {
    //         name: fullName,
    //         age:age,
    //         phone:phone,
    //         email:email,
    //         gender:gender,
    //       })
    //       .then(()=>navigation.navigate('HomeScreen'))
    //       console.log("Document written with ID: ", id);

    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor:'white', margin:10, borderRadius:5, padding:10}}>
                <Image
                    style={styles.img}
                    source={require("../../src/assets/Images/ProfileImage.webp")} />
                <TouchableOpacity style={styles.imgbtn}>
                    <Text style={{color:primary}}>
                        Add a Photo 
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.scrollView}>
                <TextInput style={styles.input} value={fullName} onChangeText={text => setFullName(text)} placeholder='Full Name' placeholderTextColor={'black'}/>

                <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} placeholder='Date Of Birth' placeholderTextColor={'black'}/>

                <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} placeholder='Email' placeholderTextColor={'black'} />
            </View>

            <TouchableOpacity onPress={sendData} style={styles.btn}>
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 50,
        alignSelf: 'center',
        margin: 10,
        backgroundColor:'white'
    },
    imgbtn: {
        borderColor: primary,
        height: 40,
        width: 200,
        borderWidth: 0.5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    scrollView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius:15
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        margin: 15,
        marginTop: 5,
        borderRadius: 10,
        borderBottomWidth: 0.5,
        padding:5
    },
    btn: {
        backgroundColor: primary,
        height: 60,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop:20
    },
    btntxt: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
    },

});

export default Basic;