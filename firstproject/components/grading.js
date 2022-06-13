import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        
        <View style={styles.container}>
        <Text>The counter value is {count} </Text>
        <Button 
            title="100" 
            onPress = {() => setCount(count+100)}
            
            />
        <Button 
            title="50" 
            color="red"
            onPress = {() => setCount(count+50)}
            />
        <Button 
            title="25" 
            color="yellow"
            onPress = {() => setCount(count+25)}
            />
        <Button 
            title="10" 
            color="green"
            onPress = {() => setCount(count+10)}
            />
        <Button 
            title="5" 
            color="pink"
            onPress = {() => setCount(count+5)}
            />
        <Button 
            title="1" 
            color="black"
            onPress = {() => setCount(count+1)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8, 
  },
 
});
export default Counter;