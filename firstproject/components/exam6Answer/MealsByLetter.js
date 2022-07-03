import React,{useState} from 'react';
import {View, Text, TextInput, FlatList, Button, Image} from 'react-native';

import axios from 'axios';


const Meal = ({title,category,imageLink,instructions}) => {
    return (
    <View>
      <Text style={{fontSize:32,justifyContent:'center'}}>
        {title}/{category}</Text>
        <View style={{flexDirection:'row',padding:10}}>
        <Image
            style={{width:200,height:200,padding:10}} 
            source={{uri:imageLink}}/>
        <Text style={{padding:10}}>
            {instructions}
        </Text>
      </View>
  </View>)
}


const MealsByLetter = () => {
    const [letter,setLetter]=useState('');
    const [meals,setMeals] = useState([]);

    const getMealsByLetter = async (theLetter) => {
        console.log('in getMealsByLetter '+theLetter);
        const url="https://www.themealdb.com/api/json/v1/1/search.php?f=";
        const meals = await axios.get(url+theLetter);
        console.dir(meals);
        setMeals(meals.data.meals);
    }

    return (
        <View style={{margin:5,padding:5}}>
            <Text style={{fontSize:32}}>
                Meals by Letter
            </Text>
            <Text>Pick a letter</Text>
            <View style={{flexDirection:'row'}}>
                
                <TextInput
                   style={{backgroundColor:'aqua'}}
                   onChangeText = {(text)=> setLetter(text)}
                   value={letter}
                   />
                   <Button
                    title="get meals"
                    onPress={() => getMealsByLetter(letter)}
                    />
            </View>
            

            <FlatList
                data={meals}
                keyExtractor={({ idMeal }, index) => idMeal}
                renderItem={({ item }) => {
                    return (
                    <Meal 
                        title={item.strMeal}
                        imageLink={item.strMealThumb}
                        category={item.strCategory}
                        instructions={item.strInstructions}
                        />
                    )}
                            
                }
             />

        </View>
    )
}

export default MealsByLetter;