import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { useState } from 'react';
import { SelectList} from 'react-native-dropdown-select-list'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { primary } from '../../style/styles';
import DropDownPicker from 'react-native-dropdown-picker';


const DocVerification = ({ navigation }) => {
    const [vehicleType, setVehicleType] = useState()
    const data = [
        {key:'1', value:'Honda',},
        {key:'2', value:'Toyota'},
        {key:'3', value:'Suzuki'},
        {key:'4', value:'Hyundai',},
    ]
    const options = [
        { label: 'Car', value: '1', activeColor: 'blue', },
    ]
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [type, setType] = useState([
    {label: 'Honda', value: 'honda'},
    {label: 'Toyota', value: 'male'}

]);
    return (

        <View style={styles.mainContainer}>
            
            <View style={styles.card}>
            <DropDownPicker
            placeholder='Type'
            open={open}
            value={value}
            items={type}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setType}
            style={{borderBottomWidth:1, borderWidth:0, paddingLeft:15, margin:5, height:50}}
            placeholderStyle={{}}
            />
            <TextInput placeholder='Numer Plate' style={styles.input} placeholderTextColor="black">
                

            </TextInput>
            <TextInput placeholder='Engine' style={styles.input} placeholderTextColor="black"></TextInput>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                    <TouchableOpacity style={styles.uploadbtn}>
                        <AntDesign name='idcard' size={50} color={primary}/>
                        <Text style={{fontSize:11, color:'black', fontWeight:'bold', alignSelf:'center'}}>
                         Upload Vehicle Registration
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadbtn}>
                         <Ionicons name='cloud-upload' size={50} color={primary}></Ionicons>
                         <Text style={{fontSize:11, color:'black', fontWeight:'bold', alignSelf:'center'}}>
                             Upload Vehicle Images
                         </Text>
                    </TouchableOpacity>

                </View>
                
            </View>
            <TouchableOpacity style={styles.submitbtn}>
                    <Text style={{color:'white', fontWeight:'500', alignSelf:'center', fontSize:20}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DocVerification

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    card: { 
        justifyContent:'space-evenly',
        backgroundColor:'white',
        margin:10,
        borderRadius:5,
        padding:10
        },
    uploadbtn:{
        justifyContent:'center',
        height:100,
        width:150,
        alignSelf:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:primary,
        borderRadius:15,
        margin:5
    },
    submitbtn:{
        height:70,
        width:200,
        borderRadius:40,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'blue',
        alignSelf:'center',
        margin:10,
        backgroundColor:primary,
        marginTop:30

    },
    input:{
        height:50,
        borderBottomWidth:1,
        padding:15,
        margin:5
    }

})