import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from '../components/CommonIcons';

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
          <View
            style={[
              styles.container,
              styles.justfyCenter,
              
            ]}>
            <Text style={{fontWeight:'bold', fontSize :15}}>
              Home Screen
            </Text>
          </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  justfyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
