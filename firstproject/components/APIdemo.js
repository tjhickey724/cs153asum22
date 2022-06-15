import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://reactnative.dev/movies.json'
      );
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };
  
const APIdemo = () => {
    return(
        <View>
            <Text>API Demo</Text>
        </View>
    );
}

export default APIdemo;
