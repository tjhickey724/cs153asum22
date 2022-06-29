/*
  ValueStorageContext this adds async storage to valueContext
*/
import React, { useState, useEffect, useContext, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValueContext = createContext(null)

const ValueProvider = ({value, tag, children}) => {
  const [currentValue,setCurrentValue] = useState(value);

  useEffect(() => {getData();},[]) // init currentValue with AsyncStorage

  const getData = async () => 
    {
      try {
        const jsonValue = await AsyncStorage.getItem(tag)
        let data = null
        if (jsonValue!=null) {
          data = JSON.parse(jsonValue);
          setCurrentValue(data)
        } else {
          setCurrentValue(value)  
        }
      } catch(e) {
        console.dir(e)
      }
  }
  

  const storeData = async (value) => {
      try {
        console.log('in storeData');
        setCurrentValue(value);
        await AsyncStorage.setItem(tag, JSON.stringify(value));
      } catch (e) {
        console.dir(e)
      }
  }


  return (
    <ValueContext.Provider
        value={{currentValue,setCurrentValue:storeData}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)
