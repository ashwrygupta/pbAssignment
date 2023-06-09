import React from 'react';
import { View, Text,Image, } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles/DetailsScreen';

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const arr = useSelector(state => state.users.filter(user => user.id === id))[0];

  console.log(arr)
  

  return (
    <View style={[styles.container,styles.card]}>
        <View style={{padding:15}}>
        <Image  source={{uri:arr.avatar}}  style={styles.avatar}/>
        </View>
        <View style={{justifyContent:'center'}}>
        <Text>{`First Name: ${arr.first_name}`}</Text>
      <Text>{`Last Name: ${arr.last_name}`}</Text>
      <Text>{`Email: ${arr.email}`}</Text>

        </View>
      
      
      
    </View>
  );
};



export default DetailsScreen;
