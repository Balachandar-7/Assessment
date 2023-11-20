/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function SplashScreen(props) {

    useFocusEffect(
      React.useCallback(() => {
        // Do something when the screen is focused.
        setTimeout(() => {
          props.navigation.reset(
            {
              index: 0,
              routes: [{ name: "Home" }],
            }
            )
          }, 2800);
       // alert('Home Screen was focused');
        return () => {
       // Do something when the screen is unfocused
         // alert('Home Screen was unfocused');
        };
      }, [])
    )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Image
         source={require('../../assets/images/logo.png')}
         style={{width: 200, height: 200, resizeMode: 'contain',}}
         ></Image>
    </View>
  );
}

export default SplashScreen;
