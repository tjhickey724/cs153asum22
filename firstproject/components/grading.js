import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a simple app</Text>
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