import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function CalendarScreen(props) {
    return (
      <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.container,
          styles.justfyCenter,
        ]}>
        <Text style={{fontWeight:'bold', fontSize :15}}>
          Calendar Screen
        </Text>
      </View>
</SafeAreaView>
    );
  }

  export default CalendarScreen;
  
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