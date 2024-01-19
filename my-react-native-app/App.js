import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './Navigation';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const App = () => {

  return (
    <NavigationContainer>
      
        <Navigation />
      
    </NavigationContainer>
  );
};

export default App;
