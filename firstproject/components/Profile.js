/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';

const Profile = () => {
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");

    return (
        <View>
            <Text> Profile Page</Text>

        </View>
    )
}