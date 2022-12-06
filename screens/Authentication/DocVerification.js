import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { useState } from 'react';
import { SelectList} from 'react-native-dropdown-select-list'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'



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
    return (

        <View style={styles.mainContainer}>
            
            <View style={styles.card}>
                <SelectList
                placeholder='Type'
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                    inputStyles={{fontSize:18}} boxStyles={{backgroundColor:'white', borderColor:'white', margin:5, borderBottomWidth:1}}
                />
                <SelectList
                placeholder='Number Plate'
                inputStyles={{fontSize:18}}
                boxStyles={{backgroundColor:'white', borderColor:'white', margin:5, borderBottomWidth:1}}
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />
                <SelectList
                placeholder='Engine'
                inputStyles={{fontSize:18}}
                boxStyles={{backgroundColor:'white', borderColor:'white', margin:5, borderBottomWidth:1}}
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />

                <View style={{flexDirection:'row'}}>

                    <TouchableOpacity style={styles.uploadbtn}>
                        <AntDesign name='idcard' size={50} color='blue'/>
                        <Text style={{fontSize:15, color:'black', fontWeight:'bold'}}>
                         Upload Your Vehicle Registration picture
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadbtn}>
                         <Ionicons name='cloud-upload' size={50} color='blue'></Ionicons>
                         <Text style={{fontSize:15, color:'black', fontWeight:'bold'}}>
                             Upload Your Vehicle Images
                         </Text>
                    </TouchableOpacity>

                </View>
                
            </View>
            <TouchableOpacity style={styles.submitbtn}>
                    <Text style={{color:'blue', fontWeight:'500', alignSelf:'center', fontSize:20}}>Submit</Text>
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
        borderColor:'blue',
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
        backgroundColor:'white',
        marginTop:30

    }

})