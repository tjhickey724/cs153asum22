import React,{useState} from 'react';
import {View,Text} from 'react-native';

import NamedCounter from './NamedCounter';


export default function App() {
    const [total,setTotal] = useState(0);
    const updateTotal = (v) => setTotal(v+total);
  return (
    <View>
      <Text>New Named Counter Demo</Text>
      <Text> total value is {total} cents</Text>
      <View style={{flexDirection:'row'}}>
        <NamedCounter  label="penny" value={1} updateTotal={updateTotal}/>
        <NamedCounter  label="nickel" value={5} updateTotal={updateTotal}/>
        <NamedCounter  label="dime" value={10} updateTotal={updateTotal}/>
        <NamedCounter  label="quarter" value={25} updateTotal={updateTotal}/>
      </View>
    </View>
    
  );
}

