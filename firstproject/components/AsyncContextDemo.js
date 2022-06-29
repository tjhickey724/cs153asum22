import React from "react";


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  const sendFeedback= (text) => {console.log('sending feedback:'+text)}
  const getFeedback = () => {console.log('getting feedback'); return(['f1','f2'])}
 

  let data = {name:"Tim Hickey",age:66.9,weight:165,height:68,sendFeedback,getFeedback};

  return (
    <ValueProvider value={data} tag="exam5a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;