//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const PaginationComponent = (props) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        //padding:5,
        paddingVertical:5,
        width:80,
        elevation:5,
        borderRadius:2
    } ,
    text:{
        alignSelf:'center'
    }

});

//make this component available to the app
export default PaginationComponent;
