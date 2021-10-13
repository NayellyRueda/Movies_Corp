import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "../views/movies/movies";
import DescriptionMovie from "../views/movies/descriptionMovie";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
/**
 * This is the nesting navigation .  
 */

export default function Navigation(){
  const HomeStack = createNativeStackNavigator();
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" 
        component={Movies}
        options={{ headerShown: false,  headerStatusBarHeight: 0, }}
      />
      <HomeStack.Screen 
        name="Home2" 
        component={DescriptionMovie} 
        options={{
          headerTransparent: true, 
          title: '',
          headerTintColor: '#fff'
        }}
      />
    </HomeStack.Navigator>
  );
}

