import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { authentication, db } from '../../firebase';
import { getDoc, doc, query, onSnapshot, collection } from 'firebase/firestore'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

const Profile = ({ navigation }) => {
    const [user, setUser] = useState([]);

    return (
        <>
        <View style={styles.profile}>
            <Image source ={require('../../src/assets/Images/ProfileImage.webp')} style={styles.profile_image}/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.name_txt}> Saad Shafqat</Text>
            <Text style={{color:'white'}}> +92 3xx xxxxxxx</Text>
            </View>
            <FontAwesome name='edit' style={styles.edit_icon} ></FontAwesome>
            
        </View>

        <ScrollView style ={styles.edit_profile}>
            <Card/>
            <Card1/>
            <Card2/>
            <Card3/>
            <TouchableOpacity style={{alignSelf:'center', backgroundColor:'white', height:50, width:120, alignItems:'center', justifyContent:'center', marginTop:15, borderRadius:15}}>
                <Text>Save</Text>
            </TouchableOpacity>
        </ScrollView>
        
        <ProgressBar progress={0.3} color='blue' style={{height:10, marginBottom:60}}/>
        
        
        
        </>
    );
}


export default Profile

const styles = StyleSheet.create({
    profile:{
        flex:0.25,
        backgroundColor:'#8200d6',
        height: 170,
        borderRadius:25,
        margin:15,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    edit_profile:{
        flex:0.6,
        backgroundColor:'#8200d6',
        height: 370,
        borderRadius:25,
        margin:15,
        alignContent:'stretch'
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
        fontWeight:'bold',
        marginTop: 50,
        fontSize:23,
        color:'white',
        paddingLeft:5
    },
    edit_icon:{
        fontWeight:'bold',
        marginTop: 50,
        fontSize:23,
        color:'white',
        paddingLeft:45
    },
    cards:{
        height:60,
        backgroundColor:'white',
        margin:10,
        borderRadius:15
    },
    icon:{
        padding:10,
        color:'orange'
    },
    txt:{
        fontWeight:'bold',
        marginTop:10,
        fontSize:20,
        paddingLeft:20
    }
})

function Card(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='mail' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>Email</Text>
                      <Text>saadshafqat@gmail.com</Text>
                    </View>
                    <FontAwesome name='edit' style={{paddingLeft:80, padding:15 }} size={30} ></FontAwesome>  
                </View>
            </TouchableOpacity>
    )
}
function Card1(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='home' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>Address</Text>
                      <Text>street 3, g-6/3</Text>
                    </View>
                    <FontAwesome name='edit' style={{paddingLeft:140, padding:15 }} size={30} ></FontAwesome>  
                </View>
            </TouchableOpacity>
    )
}
function Card2(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='person' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>CNIC</Text>
                      <Text>3510x-xxxxxxx-x</Text>
                    </View>
                   
                </View>
            </TouchableOpacity>
    )
}
function Card3(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='document-outline' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>Lisence</Text>
                      <Text>Not Added Yet</Text>
                    </View> 
                </View>
            </TouchableOpacity>
    )
}
function Card4(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='document-outline' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>Lisence</Text>
                      <Text>Not Added Yet</Text>
                    </View> 
                </View>
            </TouchableOpacity>
    )
}
function Card5(){
    return(
        <TouchableOpacity style={styles.cards}>
                <View style={{flex:1, flexDirection:'row', }}>    
                    <Ionicons style={styles.icon} name='document-outline' size={50}></Ionicons>
                    <View>                 
                      <Text style={styles.txt}>Lisence</Text>
                      <Text>Not Added Yet</Text>
                    </View> 
                </View>
            </TouchableOpacity>
    )
}