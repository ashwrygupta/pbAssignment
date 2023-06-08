import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

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

const styles=StyleSheet.create({
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 12,
    } ,
  container:{
   // flex: 1,
   flexDirection:'row',
  
  } ,
  card: {
    backgroundColor: 'white',
   // borderRadius: 8,
    paddingVertical: 5,
   // paddingHorizontal: 25,
    width: '100%',
    //marginVertical: 10,
   elevation:10
 },
})

export default DetailsScreen;
