import React, { useState, useEffect } from 'react';
import { Text, FlatList, View,  Button, TextInput, SafeAreaView } from 'react-native';



const Exam4c = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ingr,setIngr] = useState('Salmon');
    const [area,setArea] = useState('i');

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/list.php?"+area+"=list";
          const response = await fetch(url);
          const json = await response.json();
          console.dir(json.meals);
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingr])

    return(
        <SafeAreaView>
            <Text style={{fontSize:30,margin:10}}>Ingredient Finder</Text>
            <View style={{margin:10}}>
    
                <Text>push the buttons below to select the main ingredient</Text>
                <Text>Main ingredient is {ingr}</Text>
  
            </View>

            
            <FlatList
                data={data}
                keyExtractor={({ idIngredient }, index) => idIngredient}
                renderItem={({ item }) => (
                    <View >
                        <View style={{
                            padding:5,
                            margin:5,
                            borderWidth:2,
                            justifyContent:'flex-start',
                            backgroundColor:'#ffaaaa',}}>
                            <Button 
                                title={item.strIngredient} 
                                onPress = {() => setIngr(item.strIngredient) }
                                />
                        </View>
    
                        
                    </View>
                )}
            /> 

        </SafeAreaView>
    );
}

export default Exam4c;
