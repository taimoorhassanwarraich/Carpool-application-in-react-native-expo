import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const License = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('09-10-2021');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date)
        hideDatePicker();
      };
  return (
    
    <View style={styles.container}>

      <View style={styles.cards}>

        <Text style={styles.label}>License number</Text>
        <TextInput style={styles.input}/>

      </View>

      <View style={styles.cards}>

      <Text style={styles.label}>Picture of License</Text>
      <FontAwesome name='drivers-license-o' size={100} style={{alignSelf:'center'}}/>
          <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'blue',fontWeight: '500',fontSize: 18}}>Upload</Text>
            </TouchableOpacity>
      </View>


      <View style={styles.cards}>
      <Text style={styles.label}>Expiration Date</Text>
      <TextInput placeholder={'Select Date'} style={styles.datepicker} placeholderTextColor='black' onPressOut={showDatePicker} editable={false} value={date}></TextInput>
      </View>
      <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'blue',fontWeight: '500',fontSize: 18}}>Save</Text>
            </TouchableOpacity>
    </View>
  )
}

export default License

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cards:{
        backgroundColor:'white',
        justifyContent:'center',
        margin:10,
        padding:10,
        borderRadius:10
    },
    input:{
        borderWidth:1,
        height:60,
        borderRadius:10,
        margin:5
    },
    label:{
        alignSelf:'center',
        fontSize:18,
        margin:7
    },
    btn:{
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
    datepicker:{
        backgroundColor:'white',
        height:60,
        padding:15,
        borderColor:'black',
        borderWidth:1,
        borderRadius:30,
        margin:3,
    }
})