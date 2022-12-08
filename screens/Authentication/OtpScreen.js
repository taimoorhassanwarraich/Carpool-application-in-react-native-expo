import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { primary } from '../../style/styles'

const OtpScreen = ({navigation}) => {
    const onChangetext = (value)=>{
        setInternalVal(val)
    }
    const [internalVal, setInternalVal] = useState('')
    const lenghtInput = 6; 
    let textInput = useRef(null)

   const focus= useEffect(() => {
    }, [])
  return (

    <View style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={'padding'} style={styles.view}>
            <Text style={styles.textLabel}>Input Code sent via SMS</Text>

            <View>
            <TextInput
            
            onChangeText={onChangetext}
            style={{width:0, height:0}}
            value={internalVal}
            maxLength={lenghtInput}
            returnKeyType="done"
            keyboardType='numeric'
            autoFocus={true}
            ref={null}
            />
        <View style={styles.containerInput}>
            {
                Array(lenghtInput).fill().map((data, index)=>(

                    <View 
                    style={[styles.cellView, 
                    {borderBottomColor: index == internalVal.length ? 'red': primary}
                ]} 
                    key={index}
                    >
                    <Text style={styles.cellText} onPress={()=>focus}>
                        {internalVal && internalVal.length > 0 ? internalVal[index]: ''}
                        1
                    </Text>
                    </View>
                ))
            }
 
        </View>
        </View>    
        <View style={styles.bottomView}>
            <TouchableOpacity>
                <View style={styles.btnchange}>
                    <Text style={styles.changetxt} > Change Number</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btnreset}>
                    <Text style={styles.changetxt} > Resend OTP (24)</Text>
                </View>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    view:{
        flex:1,
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        margin:15,
        borderRadius:10
    },
    textLabel:{
        marginTop:50,
        marginBottom:50,
        fontSize:16
    },
    containerInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    cellView:{
        paddingVertical:11,
        width:40,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1
    },
    cellText:{
        textAlign:'center',
        fontSize:16
    },
    bottomView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:50,
        alignItems:'center'
    },
    btnchange:{
        width:150,
        height:50,
        borderRadius:10, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:primary,
        margin:15,
        
    },
    changetxt:{
        alignItems:'center',
        color:'white'
    },
    btnreset:{
        width:150,
        height:50, 
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:primary,
        alignItems:'center'
    }
})