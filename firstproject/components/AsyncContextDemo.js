import React,{useState} from "react";
import Axios from 'axios';


import ValueProvider from './ValueStorageContext';
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
    //setResult(JSON.stringify(response.data));
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
    <ValueProvider value={data} tag="exam5a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;