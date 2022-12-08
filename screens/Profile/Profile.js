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
        <View style={styles.container}>

        <View style={styles.profile}>

            <Image source ={require('../../src/assets/Images/ProfileImage.webp')} style={styles.profile_image}/>

            <View style={{flexDirection:'column'}}>
            <Text style={styles.name_txt}> Saad Shafqat</Text>
            <Text> +92 3xx xxxxxxx</Text>
            </View>

            <FontAwesome name='edit' style={styles.edit_icon} ></FontAwesome>
        
        </View>

        <View style ={styles.edit_profile}>
            <Card/>
            <Card1/>
            <Card2/>
            <Card3/>
        </View>
        <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:18, fontWeight:'500', color:'blue'}}>
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
        backgroundColor:'white',
        height:60,
        width:200,
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:15, 
        borderRadius:35,
        borderWidth:1,
        borderColor:'blue'
    },
    container:{
        flex:1
    },
    profile:{
        backgroundColor:'white',
        borderRadius:25,
        margin:15,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    edit_profile:{
        backgroundColor:'white',
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
        borderBottomWidth:1
    },
    icon:{
        padding:10,
        color:'blue'
    },
    txt:{
        fontWeight:'500',
        fontSize:20,
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
                  
                    <Ionicons style={styles.icon} name='mail' size={35}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>Email</Text>
                      <Text>saadshafqat@gmail.com</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:10, color:'blue', marginLeft:80}} size={28} ></FontAwesome>  
            </TouchableOpacity>
    )
}
function Card1(){
    return(
        <TouchableOpacity style={styles.cards}>
                  
                    <Ionicons style={styles.icon} name='mail' size={35}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>Address</Text>
                      <Text>Street 3,G-6/3,Islamabad</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:10, color:'blue', marginLeft:80}} size={28} ></FontAwesome>  
            </TouchableOpacity>
    )
}
function Card2(){
    return(
        <TouchableOpacity style={styles.cards}>
                    <Ionicons style={styles.icon} name='person' size={35}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>CNIC</Text>
                      <Text>35123-987654321031-5</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:10, color:'blue', marginLeft:80}} size={28} ></FontAwesome>  
            </TouchableOpacity>
    )
}
function Card3(){
    return(
        <TouchableOpacity style={styles.cards}>
                    <Ionicons style={styles.icon} name='document-outline' size={35}></Ionicons>
                    <View style={{alignSelf:'center'}}>                 
                      <Text style={styles.txt}>CNIC</Text>
                      <Text>35123-987654321031-5</Text>
                    </View>
                    <FontAwesome name='edit' style={{alignSelf:'center', marginRight:10, color:'blue', marginLeft:80}} size={28} ></FontAwesome>  
            </TouchableOpacity>
    )
}