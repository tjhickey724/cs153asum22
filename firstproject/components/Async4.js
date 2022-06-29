import React, {useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext';

const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <View>
            <Text> Give some feedback please: </Text>
            <TextInput
               placeholder="feedback"
               onChangeText = {(text) => setFeedback(text)}
            />
            <Button
                title="send feedback"
                />
        </View>
    )
}

export default Async4;