/*
  This App has a bug in that it stores the
  functions getFeedback, etc. in the context
  for sharing, which is fine, but the ValueStorageContext
  also tries to store and restore them in AsyncStorage
  and this breaks as only JSON items can be stored
  in the AsyncStorage....

  I'm keeping this in the folder as we discussed
  it in class. It is better to have a separate
  package for handling communication with the server
  and to only store JSON-able objects in context.

  The demoApp folder shows the proper way to handle
  server communication, async storage and context
  sharing.
*/
import React from "react";
import Axios from 'axios';


import ValueProvider from '../ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  const url="https://damp-springs-29329.herokuapp.com";

  const sendFeedback = async (feedback) => {
    const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'tjhickey@brandeis.edu',
                           key:'asyncCDfeedback',
                           value:feedback,
                          });
    console.dir(response.data);
};

const getFeedback = async (saveFeedback) => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'tjhickey@brandeis.edu',key:'asyncCDfeedback'});
  console.log('got feedback:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await Axios.post(url+"/cloud/clear",{email:'tjhickey@brandeis.edu'});
};


  let data = {name:"Tim Hickey",
              age:66.9,
              weight:165,
              height:68,
              sendFeedback,
              getFeedback,
              clearData,
             }

  return (
    <ValueProvider value={data} tag="exam6a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;