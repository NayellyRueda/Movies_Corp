import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "../views/movies/movies";
import DescriptionMovie from "../views/movies/descriptionMovie";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
      <Tab.Navigator>  
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{ 
            headerShown: false, 
            title: "", 
            headerStatusBarHeight: 0,
          }}
        />
        <Tab.Screen
          name="descriptionGeneralMovie"
          component={DescriptionMovie}
          options={{ 
            headerShown: false, 
            title: "", 
            headerStatusBarHeight: 0,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

