import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const NamedCounter = ({label,value,updateTotal}) => {
    /* increase the count by "value" when it pushed
       and display the label in the view ..
    */
    const [count,setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>{count} cents</Text>
            <Button 
                color = '#FAD4D4'
                title={label} 
                onPress = {() => {
                    updateTotal(value);
                    setCount(count+value);}
                 }
                />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8, 
  },
 
});
export default NamedCounter;