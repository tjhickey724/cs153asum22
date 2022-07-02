import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async1 = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [radius,setRadius] = useState(currentValue.radius);
    const [height,setHeight] = useState(currentValue.setHeight);
   
    useEffect(()=> {
        setRadius(currentValue.radius);
        setHeight(currentValue.height);
         },
        [currentValue]);

    return ( 
        <View style={{justifyContent:'space-between',flex:1}}>
            <Text> currentValue = {JSON.stringify(currentValue)} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>radius</Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setRadius(text)} 
                    value={radius}
                />
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>height</Text>
                <TextInput
                    style={{backgroundColor:'aqua'}}
                    onChangeText = {(text)=>setHeight(text)} 
                    value={height}
                />
            </View>
            
            <Button 
               title="save Data"
               onPress = {() => 
                    setCurrentValue({radius,height})
                }
               />
            
            
        </View>
    )
}
export default Async1;