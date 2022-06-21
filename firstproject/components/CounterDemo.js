import React from 'react';
import {View,Text} from 'react-native';

import NamedCounter from './NamedCounter';


export default function App() {
  return (
    <View>
      <Text>New Named Counter Demo</Text>
      <View style={{flexDirection:'row'}}>
        <NamedCounter  label="penny" value={1}/>
        <NamedCounter  label="nickel" value={5}/>
        <NamedCounter  label="dime" value={10}/>
        <NamedCounter  label="quarter" value={25}/>
      </View>
    </View>
    
  );
}

