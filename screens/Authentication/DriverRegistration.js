import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const DriverRegistration = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>

                <TouchableOpacity style={styles.btncard} onPress={navigation.navigate('Basic')}>
                    <Text style={styles.btntxt}>
                        Basic Info
                    </Text>
                    <Ionicons name='arrow-forward' size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btncard} onPress={navigation.navigate('License')}>
                    <Text style={styles.btntxt}>
                        Driver License
                    </Text>
                    <Ionicons name='arrow-forward' size={20}></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btncard} onPress={navigation.navigate('CNIC')}>
                    <Text style={styles.btntxt}>
                        CNIC
                    </Text>
                    <Ionicons name='arrow-forward' size={20}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btncard} onPress={navigation.navigate('Doc Verification')}>
                    <Text style={styles.btntxt}>
                        Vehicle Info
                    </Text>
                    <Ionicons name='arrow-forward' size={20}></Ionicons>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'blue',fontWeight: '500',fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DriverRegistration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',

    },
    scrollView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15
    },
    btn: {
        borderColor: 'blue',
        height: 60,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop:30,
        borderWidth:1
    },
    btntxt: {
        fontSize: 18
    },
    btncard: {
        height: 60,
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth:0.2,
        flexDirection:'row'
    }
})