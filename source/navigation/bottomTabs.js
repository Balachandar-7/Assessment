
import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import JobScreen from '../screens/JobScreen';
import TaskScreen from '../screens/TaskScreen';
import CalendarScreen from '../screens/CalendarScreen';
import walletScreen from '../screens/TaskScreen';
import CommonIcons from '../components/CommonIcons';
import Colors from '../utils/Colors';
import MyTabBar from './bottomTabbar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function NavTabs() {

    return (
      <Tab.Navigator tabBar={MyTabBar}>
        <Stack.Screen options={{ headerShown: false }} name="Buttons" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="List" component={JobScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Input" component={CalendarScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fonts" component={TaskScreen} />
         <Stack.Screen options={{ headerShown: false }} name="Wallet" component={walletScreen} />
      </Tab.Navigator>
    );
  }


