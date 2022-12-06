import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { authentication, db } from '../../firebase';
import "@react-native-async-storage/async-storage";
import { sendPasswordResetEmail } from 'firebase/auth';


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
            <View style={styles.scrollView}>
                <Image
                    style={styles.img}
                    source={require("../../src/assets/Images/ProfileImage.webp")} />
                <TouchableOpacity style={styles.imgbtn}>
                    <Text style={{color:'blue'}}>
                        Add a Photo 
                    </Text>
                </TouchableOpacity>
                <Text style={styles.label}>
                    Full Name 
                </Text>
                <TextInput style={styles.input} value={fullName} onChangeText={text => setFullName(text)} />
                <Text style={styles.label}>
                    Date Of Birth
                </Text>
                <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} />
                <Text style={styles.label}>
                    Email
                </Text>
                <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} />
                <Text style={styles.label}>
                    Gender
                </Text>
                <TextInput style={styles.input} value={gender} onChangeText={text => setGender(text)} />
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
        margin: 10
    },
    imgbtn: {
        borderColor: 'blue',
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
        borderWidth: 0.5,
    },
    label: {
        fontSize: 16,
        margin: 3,
        fontWeight: '500',
        marginLeft:15
    },
    btn: {
        backgroundColor: 'blue',
        height: 60,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

});

export default Basic;