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

        <SafeAreaView style={styles.mainContainer}>
            <View style={{flex:0.8, justifyContent:'space-evenly'}}>
                <SwitchSelector
                    style={styles.selector}
                    options={options}
                    initial={0}
                    fontWeight='bold'
                    onPress=
                    {(value) => setVehicleType("value")
                    }
                />
                <SelectList
                placeholder='Company'
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />
                <SelectList
                placeholder='Model'
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />
                <SelectList
                placeholder='Year'
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />
                <SelectList
                placeholder='Engine'
                    setSelected={(val) => setVehicleType(val)}
                    data={data}
                    onSelect={() => alert(selected)}
                    save="value"
                    label= "Select Model"
                />
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.btn}>
                    <AntDesign name='idcard' size={50}></AntDesign>
                    <Text style={{fontSize:15, color:'black', fontWeight:'bold'}}>
                        Upload Your CNIC picture
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Ionicons name='cloud-upload' size={50}></Ionicons>
                    <Text style={{fontSize:15, color:'black', fontWeight:'bold'}}>
                        Upload Your Vehicle Images
                    </Text>
                </TouchableOpacity>
                </View>
                
            </View>
            <TouchableOpacity style={styles.submitbtn}>
                    <Text style={{color:'white', fontWeight:'bold', alignSelf:'center', fontSize:20}}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DocVerification

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    selector: {
        width: 350,
        margin: 10,

    },
    btn:{
        justifyContent:'center',
        backgroundColor:'lightblue',
        height:100,
        width:150,
        alignSelf:'center',
        alignItems:'center',
        marginLeft:25
    },
    submitbtn:{
        height:50,
        backgroundColor:'blue',
        width:200,
        borderRadius:30,
        justifyContent:'center'
    }

})