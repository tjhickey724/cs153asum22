import React, { useState, useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';



const GitHubDemo = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const getRepos = async () => {
        try {
          const response = await fetch('https://api.github.com/users/tjhickey724/repos');
          const json = await response.json();
          setData(json); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getRepos()}, [])

    return(
        <View>
            <Text>Github Demo</Text>
            
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
          )}
        />
           

        </View>
    );
}

export default GitHubDemo;
