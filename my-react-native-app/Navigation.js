import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Acceuil from './Acceuil';
import CreeProject from './CreeProject';
import Levels from './Levels';
import NewProject from './NewProject';
import CreeProject1 from './CreeProject1';
import Win from './Win';
import Lose from './Lose';
import Game1 from './Game1';
import Game from './Game';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Acceuil" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Acceuil" component={Acceuil} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreeProject" component={CreeProject} />
      <Stack.Screen name="CreeProject1" component={CreeProject1} />
      <Stack.Screen name="Levels" component={Levels} />
      <Stack.Screen name="NewProject" component={NewProject} />
      <Stack.Screen name="Win" component={Win} />
      <Stack.Screen name="Lose" component={Lose} />
      <Stack.Screen name="Game1" component={Game1} />
      <Stack.Screen name='Game' component={Game} />
    </Stack.Navigator>
  );
};  

export { Stack, Navigation };
