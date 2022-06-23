import React from "react";
import ValueProvider from './ValueContext';
import TabStackDemo from './TabStackDemo'

const App = () => {
  const data = {name:"anon", email:"anon@anon.com",secret:""}

  return (
    <ValueProvider value={data}>
        <TabStackDemo />
    </ValueProvider>
  )
}

export default App;