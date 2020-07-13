import React from 'react';
import { StatusBar } from 'react-native';

import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(69, 42, 176, 1)"
      />

      <Dashboard />
    </>
  );
};

export default App;
