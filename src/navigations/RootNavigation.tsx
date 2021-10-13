import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../views/movies/movies';
import DescriptionMovie from '../views/movies/descriptionMovie';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';

/**
 * This navigation attracts stacks.  
 */


export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}
