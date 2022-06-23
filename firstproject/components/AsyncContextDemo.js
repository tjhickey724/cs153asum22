import React from "react";
import ValueProvider from './ValueContext';
import AsynDemo from './AsyncDemo'

const App = () => {
  const data = {name:"anon", email:"anon@anon.com",secret:""}

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;