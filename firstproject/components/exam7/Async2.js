import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueStorageContext';


const Async2 = () => {
    const {currentValue} = useValue();
    return (

        <View style={{flex:1}}>
            <Text> Age Calculator </Text>
            <Text> age in years: {currentValue.age} </Text>
            <Text> age in weeks: {currentValue.age*52} </Text>
            <Text> age in days: {currentValue.age*365.25} </Text>
            <View style={{flex:1}}></View>

        </View>
 
    )
}

export default Async2;