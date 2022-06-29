import React,{useState} from "react";
import Axios from 'axios';


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  const url="https://damp-springs-29329.herokuapp.com";

  const sendFeedback = async (feedback) => {

    //const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'tjhickey@brandeis.edu',
                           key:'asyncCDfeedback',
                           feedback});
    //console.dir(response.data);
    //setResult(JSON.stringify(response.data));
};

const getFeedback = async () => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'tjhickey@brandeis.edu',key:'asyncCDfeedback'});
  console.dir(response)
  //setResult(response.data);

};  

  //const getFeedback = () => {console.log('getting feedback'); return(['f1','f2'])}
  const [result,setResult] = useState("");

  const getResult = () => {console.log('getting result'); return result;}

  let data = {name:"Tim Hickey",
              age:66.9,
              weight:165,
              height:68,
              sendFeedback,
              getFeedback,
              getResult
             }

  return (
    <ValueProvider value={data} tag="exam5a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;