import React, {useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from '../ValueStorageContext';

const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <View>
            <Text> Give some feedback pretty please: </Text>
            <TextInput
               placeholder="feedback"
               onChangeText = {(text) => setFeedback(text)}
               value={feedback}
            />
            <Button
                title="send feedback"
                onPress = {() => {
                    console.log('sending feedback....');
                    currentValue.sendFeedback(feedback);
                    setFeedback("")}}
                />
                <Text>
                    {JSON.stringify(currentValue)}
                </Text>
        </View>
    )
}

export default Async4;