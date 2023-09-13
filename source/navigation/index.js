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
    <Tab.Navigator tabBar={renderTabBar}>
    <Stack.Screen  options={{ headerShown: false }}  name="Buttons" component={HomeScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="List" component={JobScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Input" component={CalendarScreen} />
    <Stack.Screen  options={{ headerShown: false }}  name="Fonts" component={TaskScreen} />
  </Tab.Navigator>
    {/* <CurvedBottomBarExpo.Navigator

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
    </CurvedBottomBarExpo.Navigator> */}

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
  
const renderTabBar = ({ state, descriptors, navigation}) => {
    return (
      <>
  <View style={{ flexDirection: 'row' , paddingTop: 10}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconType = ""
        let iconname = ""
        if(label == "Buttons"){
          iconType = 'Entypo';
          iconname= "emoji-neutral";
        }else if(label == "List"){
          iconType = 'Entypo';
          iconname= "list";
        }else if(label == "Input"){
          iconType = 'MaterialCommunityIcons';
          iconname= "note-text";
        }
        else if(label == "Fonts"){
          iconType = 'FontAwesome';
          iconname= "font";
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {

            }
            <CommonIcons name={iconname}  type={iconType} style={{color:isFocused ? '#e61f60' : '#929292',fontSize: 30 }}  size={10} />
            <Text style={{ color: isFocused ? '#e61f60' : '#222', fontSize: 15}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
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