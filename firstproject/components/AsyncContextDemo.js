import React from "react";
import ValueProvider from './ValueContext';
import AsyncDemo from './AsyncDemo';

const App = () => {
  const data = {username:"anon"};

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;