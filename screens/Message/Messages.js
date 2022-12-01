import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Messages_data = [
    {
        id : '1',
        userName : 'Taimoor Hassan',
        userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, how much work have you done?>'

    },
    {
        id : '2',
        userName : 'Abdullah',
        userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, how much work have you done?>'

    },
    {
        id : '3',
        userName : 'Shoaib Tariq',
        userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, how much work have you done?>'

    },
    {
        id : '4',
        userName : 'Ameer Humzah',
        userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, how much work have you done?>'

    }
]

const Messages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList data={Messages_data} keyExtractor= {item=>item.id} renderItem={({item})=>(
        <View>
            <Text>{item.userName}</Text>
        </View>
      )}/>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        
    }
})