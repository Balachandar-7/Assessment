// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';

import HomeScreen from '../screens/HomeScreen';
import JobScreen from '../screens/JobScreen';
import TaskScreen from '../screens/TaskScreen';
import CalendarScreen from '../screens/CalendarScreen';
import CommonIcons from '../components/CommonIcons';
import Colors from '../utils/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
    {/* <Tab.Navigator>
    <Stack.Screen  options={{ headerShown: false }}  name="Home" component={HomeScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Job" component={JobScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Calendar" component={CalendarScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Task" component={TaskScreen} />
  </Tab.Navigator> */}
    <CurvedBottomBarExpo.Navigator

      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
  
      height={55}
      circleWidth={50}
      screenOptions={{ headerShown: false,}}

      bgColor="white"
      initialRouteName="JobScreen"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
      
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
           // onPress={() => alert('Click Action')}
          >
           <CommonIcons name="plus-box-multiple"  type='MaterialCommunityIcons' style={{color: 'white'}}  size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
      
    >
      <CurvedBottomBarExpo.Screen
        position="LEFT"
        component={HomeScreen}
        name="HomeScreen"

      />
      <CurvedBottomBarExpo.Screen
        position="LEFT"
        component={JobScreen}
        name="JobScreen"
      />
      <CurvedBottomBarExpo.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="TaskScreen"
        component={TaskScreen}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>

    </NavigationContainer>
  );
}

const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let typeVal = '';
  
    switch (routeName) {
      case 'HomeScreen':
        icon = 'ios-home';
        typeVal="Ionicons";
        break;
      case 'JobScreen':
        icon = 'briefcase-outline',
        typeVal="Ionicons";
        break;
      case 'CalendarScreen':
        icon = 'calendar',
        typeVal="Octicons"
        
        break;
      case 'TaskScreen':
        icon = 'clipboard-outline',
        typeVal="Ionicons"
        break;
    }
  
    return (
      <>
        {routeName === selectedTab ?
          <CommonIcons type={typeVal} name={icon} style={{color:Colors.sky_blue}} size={25} />
          :
          <CommonIcons type ={typeVal} name={icon} style={{color:Colors.head_gray}}  size={25} />
        }
  
      </>
  
  
  
    );
  };
  
const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <>
      <TouchableOpacity style={{alignItems: 'center',}} />
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={[styles.tabbarItem,
            routeName === selectedTab ? { borderBottomWidth: 3,  alignSelf: 'center', borderBottomColor: Colors.sky_blue } : null
          ]}
        >
  
          {_renderIcon(routeName, selectedTab)}
          <Text style={{ fontSize: 13, color: routeName === selectedTab ? Colors.sky_blue : Colors.head_gray }}>{routeName == 'HomeScreen' ? 'Home' : routeName == 'JobScreen' ? 'Job' : routeName == 'CalendarScreen' ? 'Calendar' : 'Task'}</Text>
        </TouchableOpacity>
      </>
    );
  };


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