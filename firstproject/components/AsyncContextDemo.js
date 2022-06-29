import React from "react";


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {
 

  let data = {name:"Tim Hickey",age:66.9,weight:165,height:68};

  return (
    <ValueProvider value={data} tag="exam5">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;