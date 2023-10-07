import React, {useState, useRef} from 'react';
import {
  FlatList,
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
import CommonIcons from '../components/CommonIcons';
import {Avatar, Button, Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VideoPlayer from 'react-native-video-player';

function HomeScreen(props) {
  const videoRef = useRef(null);
  console.log('video data', props?.route?.params?.data);

  return (
    <SafeAreaView style={{flex: 12, backgroundColor: '#f1f0f1'}}>
      <View
        style={{
          flex: 12,
          justifyContent: 'center',
          backgroundColor: '#000',
        }}>
        <VideoPlayer
        //  resizeMode="contain"
          video={{uri: props?.route?.params?.data?.videourl}}
          videoWidth={700}
          videoHeight={500}
          thumbnail={{uri: props?.route?.params?.data?.thumbnail}}
          autoPlay
        />
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
