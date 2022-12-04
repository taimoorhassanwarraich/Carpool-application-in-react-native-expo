import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { doc, setDoc, addDoc, collection} from "firebase/firestore";
import { authentication, db } from '../../firebase';
import "@react-native-async-storage/async-storage";
import { sendPasswordResetEmail } from 'firebase/auth';


const CompleteRegistration = ({navigation}) => {

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
        gender : gender,
        
      };

      function sendData() {
         setDoc(doc(db, "users", id), Data)
         .then(()=>{
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
            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>
                    Full Name
                </Text>
                <TextInput style={styles.input} value={fullName} onChangeText={text => setFullName(text)} />
                <Text style={styles.label}>
                    Date Of Birth
                </Text>
                <TextInput style={styles.input} value={age} onChangeText={text => setAge(text)} />
                <Text style={styles.label}>
                    Phone Number
                </Text>
                <TextInput style={styles.input} value={phone} onChangeText={text => setPhone(text)} />
                <Text style={styles.label}>
                    Email
                </Text>
                <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} />
                <Text style={styles.label}>
                    Gender
                </Text>
                <TextInput style={styles.input} value={gender} onChangeText={text => setGender(text)} />
                <TouchableOpacity onPress={sendData}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'lightblue',
        marginHorizontal: 20,
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        margin: 15,
        marginTop: 5,
        borderRadius: 15,
    },
    label: {
        fontSize: 16,
        margin: 10,
        fontWeight: 'bold'
    }
});

export default CompleteRegistration;