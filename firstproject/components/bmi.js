import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi,setBMI] = useState(0);

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your height in inches"
        onChangeText={newText => 
             setHeight(newText)}
        defaultValue={height}
      />
     <TextInput
        style={{weight: 40}}
        placeholder="Enter your weight in inches"
        onChangeText={newText => 
             setWeight(newText)}
        defaultValue={weight}
      />
      <Button
        title="calculate BMI"
        onPress = {() => {
            setBMI(weight/(height*height)*703)
        }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        Your height is {height} inches
        and your weight is {weight} pounds
        and your BMI is {bmi}
      </Text>
    </View>
  );
}

export default BMI;