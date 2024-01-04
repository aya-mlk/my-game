import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './Navigation';
import Acceuil from './Acceuil';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
