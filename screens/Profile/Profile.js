import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { authentication, db } from '../../firebase';
import { getDoc, doc, query, onSnapshot, collection } from 'firebase/firestore'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import  Ionicons  from 'react-native-vector-icons/Ionicons'
import { primary } from '../../style/styles';

const Profile = ({ navigation }) => {
    const [user, setUser] = useState([]);

    return (
        <>
        <View style={styles.container}>

        <View style={styles.profile}>

            <Image source ={require('../../src/assets/Images/Saad-dp.png')} style={styles.profile_image}/>
            <Text style={styles.name_txt}> Saad Shafqat</Text>
            <Text style={{color:primary}}>Saadshafqat@gmail.com</Text>
        
        </View>

        <View style ={styles.edit_profile}>
            <Card/>
            <Card1/>
            <Card2/>
            <Card3/>
        </View>
        <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:16, fontWeight:'500', color:'white'}}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
        
        
        </>
    );
}


export default Profile

const styles = StyleSheet.create({
    btn:{
        alignSelf:'center',
        backgroundColor:primary,
        height:60,
        width:150,
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:15, 
        borderRadius:35,
    },
    container:{
        flex:1
    },
    profile:{
        borderRadius:25,
        margin:15,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10
    },
    edit_profile:{
        backgroundColor:'white',
        height: 330,
        borderRadius:25,
        margin:15,
        alignContent:'center',
        opacity:1,
        justifyContent:'center'
    },
    profile_image:{
        height: 110,
        width: 110,
        borderRadius: 60,
        backgroundColor: '#8200d6',
        margin: 10,
        borderColor:'blue',
        borderWidth:2
    },
    name_txt:{
        fontWeight:'500',
        alignSelf:'center',
        fontSize:23,
        paddingLeft:5
    },
    edit_icon:{
        fontSize:23,
        paddingLeft:45
    },
    cards:{
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
        margin:10,
        borderRadius:15,
        justifyContent:'flex-start',
        borderBottomWidth:0.18,
    },
    icon:{
        padding:10,
        color:primary,
        alignSelf:'center',
        marginRight:16,
        marginLeft:16
    },
    txt:{
        fontWeight:'500',
        fontSize:16,
    },
    btntxt: {
        fontSize: 18
    },
    btncard: {
        height: 60,
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth:0.2,
        flexDirection:'row',
        backgroundColor:'white',
        margin:5,
        borderRadius:15,
        borderBottomWidth:1
    }
})

function Card(){
    return(
        <TouchableOpacity style={styles.cards}>
                    <Ionicons style={styles.icon} name='mail' color={primary} size={24}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>Email</Text>
                      <Text style={{fontSize:14}}>saadshafqat@gmail.com</Text>
                    </View>
                    <FontAwesome name='edit' color={primary} style={{alignSelf:'center', marginRight:16, color:primary, marginLeft:55 }} size={24} ></FontAwesome>  
            </TouchableOpacity>
    )
}

function Card1(){
    return(
        <TouchableOpacity style={styles.cards}>
                  
                    <Ionicons style={styles.icon} name='home' size={24}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>Address</Text>
                      <Text style={{fontSize:14}}>Street 3,G-6/3,Islamabad</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:15, color:primary, marginLeft:50}} size={24} ></FontAwesome>  
            </TouchableOpacity>
    )
}
function Card2(){
    return(
        <TouchableOpacity style={styles.cards} >
                    <Ionicons style={styles.icon} name='person' size={24}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>CNIC</Text>
                      <Text style={{fontSize:14}}>35123-987654321031-5</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:15, color:primary, marginLeft:50}} size={24} ></FontAwesome>  
            </TouchableOpacity>
    )
}
function Card3(){
    return(
        <TouchableOpacity style={{
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
        margin:10,
        borderRadius:15,
        justifyContent:'flex-start',}}
        >
                    <Ionicons style={styles.icon} name='document-outline' size={24}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>Doc Verification</Text>
                      <Text style={{}}>35123-987654321031-5</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:10, color:primary, marginLeft:50}} size={24} ></FontAwesome>  
            </TouchableOpacity>
    )
}