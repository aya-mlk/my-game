import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Acceuil from './Acceuil';
import CreeProject from './CreeProject';
import Levels from './Levels';
import NewProject from './NewProject';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Acceuil" headerMode="none">
      <Stack.Screen name="Acceuil" component={Acceuil} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreeProject" component={CreeProject} />
      <Stack.Screen name="Levels" component={Levels} />
      <Stack.Screen name="NewProject" component={NewProject} />
    </Stack.Navigator>
  );
};

export { Stack, Navigation };
