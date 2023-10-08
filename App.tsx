/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './source/navigation';
// import { store } from './source/redux/store';
// import { Provider } from 'react-redux';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {store, persistor} from './source/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import CommonColor from './source/utils/Colors';

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={{flex:12}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={CommonColor.app_theme}
      />
      <View style={{ flex: 1, }}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
      </PersistGate>
      </Provider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
