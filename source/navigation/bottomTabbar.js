import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  Platform,
} from 'react-native';
import CommonIcons from '../components/CommonIcons';


const MyTabBar = ({ state, descriptors, navigation}) => {
  return (
    <>
<View style={{ flexDirection: 'row' , paddingVertical: 10}}>
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
        iconname= "plus";
      }else if(label == "List"){
        iconType = 'FontAwesome';
        iconname= "home";
      }else if(label == "Input"){
        iconType = 'Entypo';
        iconname= "wallet";
      }
      else if(label == "Fonts"){
        iconType = 'FontAwesome';
        iconname= "dollar";
      } else if(label == "Wallet"){
        iconType = 'Feather';
        iconname= "settings";
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
          {/* <Text style={{ color: isFocused ? '#e61f60' : '#222', fontSize: 15}}>
            {label}
          </Text> */}
        </TouchableOpacity>
      );
    })}
  </View>
    </>
  );
};


export default MyTabBar;
