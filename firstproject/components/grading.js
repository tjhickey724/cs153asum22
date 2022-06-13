import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Blue Button"
      />
      <Button style={styles.redButton}
        title="Red Button"
      />
      <Button style={styles.greenButton} 
        title="Green Button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  redButton: {
    flex: 2,
    backgroundColor: 'red',
  },
  greenButton: {
    flex: 3,
    backgroundColor: 'green',
  }
});
export {App};