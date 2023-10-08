// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/HomeScreen';
import CreateTagScreen from '../screens/createTag';
import Colors from '../utils/Colors';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,    
      }}
    initialRouteName="Splash">
    <Stack.Screen  options={{ headerShown: false }}  name="Splash" component={SplashScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Home" component={HomeScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="CreateTag" component={CreateTagScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    shawdow: {
      shadowColor: '#DDDDDD',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
      width: 55,
      height: 54,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.sky_blue,
      bottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1,
  
    },
  
    tabbarItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
  
    },
  
  
  });