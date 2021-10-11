/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View, Text } from "react-native";
// import Navigation from "./src/navigations/navigation";
import Movies from "./src/views/movies/movies";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "./src/constants/themeProvider"

export default function App() {
  return(
    // <SafeAreaProvider>
    // <AppearanceProvider>
    //   <ThemeProvider>
        
    //   </ThemeProvider>
    // </AppearanceProvider>
    // </SafeAreaProvider>
    <Movies/>
  )
}