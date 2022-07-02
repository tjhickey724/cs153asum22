import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueStorageContext';



const Async2 = () => {
    const {currentValue} = useValue();
    let r = currentValue.radius;
    let h = currentValue.height;
    let v = Math.PI*r*r*h;
    return (

        <View style={{flex:1}}>
            <Text> Cylinder Volume </Text>
            <Text> pi*r^2*h</Text>
            <Text> radius: {r} </Text>
            <Text> height: {h} </Text>
            <Text> volume: {v} </Text>

        </View>
 
    )
}

export default Async2;