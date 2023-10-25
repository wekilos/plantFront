import './App.css';
import React from 'react';
import MyRoutes from './routes/routes';
import SebedimContextProvider from './context/context';

function App() {
  return (
    <div className="App">
      
      <SebedimContextProvider>
      <MyRoutes/>
      </SebedimContextProvider>
    </div>
  );
}

export default App;
