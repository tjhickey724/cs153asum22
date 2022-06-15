import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';



const APIdemo = () => {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);

    const getMovies = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          setData(json.movies); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMovies()}, [])

    return(
        <View>
            <Text>API Demo</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
}

export default APIdemo;
