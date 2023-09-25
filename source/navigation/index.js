// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import JobScreen from '../screens/JobScreen';
import TaskScreen from '../screens/TaskScreen';
import CalendarScreen from '../screens/CalendarScreen';
import NavTabs from './bottomTabs';
import CommonIcons from '../components/CommonIcons';
import Colors from '../utils/Colors';

const Main = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function StackNavigator() {

  return (
    <NavigationContainer>
    <Main.Navigator
            screenOptions={{
                headerShown: false,    
              }}
               initialRouteName="Intro">
        <Main.Screen name="Intro" component={IntroScreen} />
        <Main.Screen name="MainScreen" component={LoginScreen} />
        <Main.Screen name="BottomMain" component={NavTabs} />
    </Main.Navigator>
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