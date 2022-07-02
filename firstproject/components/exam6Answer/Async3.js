import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueStorageContext';



const Async3 = () => {
    const {currentValue} = useValue();
    let r = currentValue.radius;
    let h = currentValue.height;
    let v = (1/3.0)*Math.PI*r*r*h;
    return (

        <View style={{flex:1}}>
            <Text> Cone Volume </Text>
            <Text> (1/3)*pi*r^2*h</Text>
            <Text> radius: {r} </Text>
            <Text> height: {h} </Text>
            <Text> volume: {v} </Text>

        </View>
 
    )
}

export default Async3;