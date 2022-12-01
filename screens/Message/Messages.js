import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';

const Messages_data = [
  {
    id: '1',
    userName: 'Taimoor Hassan',
    userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, I will be at pickup point in 3 minutes.',
  },
  {
    id: '2',
    userName: 'Abdullah',
    userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Shoaib Tariq',
    userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Hamad Sindhi',
    userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Muhammad Saad',
    userImg: require('/Users/imac/Desktop/react/Humsawar-expo/src/assets/Images/ProfileImage.webp'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Messages = ({navigation}) => {
    return (
      <Container>
        <FlatList 
          data={Messages_data}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});