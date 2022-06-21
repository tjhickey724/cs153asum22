import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const NamedCounter = ({label,value}) => {
    /* increase the count by "value" when it pushed
       and display the label in the view ..
    */
    const [count,setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>The named counter value is {count} </Text>
            <Button 
                title="push" 
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
export default NamedCounter;