import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Async1Screen from './Async1';
import Async2Screen from './Async2';
import Async3Screen from './Async3';
import Async4Screen from './Async4';
import Async5Screen from './Async5';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Async1Screen} />
        <Tab.Screen name="Age" component={Async2Screen} />
        <Tab.Screen name="BMI" component={Async3Screen} />
        <Tab.Screen name="Give Feedback" component={Async4Screen} />
        <Tab.Screen name="See Feedback" component={Async5Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

