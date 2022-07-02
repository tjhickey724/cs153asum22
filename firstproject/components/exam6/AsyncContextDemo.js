import React from "react";
import Axios from 'axios';


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  
  let data = {radius:1,height:10}

  return (
    <ValueProvider value={data} tag="exam6">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;