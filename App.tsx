/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider } from 'react-redux';
import {store} from './src/redux/store' 
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
  return(
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}