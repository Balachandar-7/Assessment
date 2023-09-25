import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import CommonIcons from '../components/CommonIcons';
import {Avatar, Button, Icon} from '@rneui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Switch } from '@rneui/themed';
import axios from 'axios';

function LoginScreen(props) {
  const [checked, setChecked] = useState(false);
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
 
  const singIn = async() => {
    await axios.post(`https://collabr-demo.dci.in/api/auth/register`, {
      mobile_number: '+919345076248',
    }).then((response) => {
      console.log("after login", response.data)
      checkOTP(response?.data?.otp)
    }).catch((err) => {
      console.log("err", err)
    })
  }
  const checkOTP = async (otpVal) => {
    console.log("checkOTP res", otpVal)
    await axios.post(`https://collabr-demo.dci.in/api/auth/verify-otp`, {
      mobile_number:'+16104132661 ',
      otp:'313541'
    }).then((response) => {
      console.log("checkOTP res", response.data)
      props.navigation.navigate('BottomMain', { screen: "HomeScreen" })
    }).catch((err) => {
      console.log("err", err)
    })
  }
  useEffect(() => {

  },[])



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 12 }}
        keyboardVerticalOffset={offsetKeyboard}
      >
        <View style={{flex:12}}>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6dc561',
        }}>
        <View style={[styles.justfyCenter, {marginTop: '5%'}]}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: hp(2.5),
              marginHorizontal: 15,
            }}>
            Lorum Ipsum dolor{' '}
          </Text>
        </View>
        <View style={[styles.justfyCenter]}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: hp(3.5),
              marginHorizontal: 15,
            }}>
            Sign Up
          </Text>
        </View>
      </View>

      <View style={{flex: 4, marginHorizontal: 15}}>
        <View style={{marginTop: '15%'}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: hp(2.5)}}>
            Lorum ipsum
          </Text>
          <View
            style={{
              width: '90%',
              height: hp(5),
              borderColor: '#b9b9be',
              borderWidth: 1,
              marginTop: '2%',
              borderRadius: 5,
            }}>
            <TextInput
              style={{marginLeft: 10}}
              placeholder="Enter your mobile number"
            />
          </View>
        </View>
        <View style={{marginTop: '5%'}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: hp(2.5)}}>
            Dolor sit
          </Text>
          <View
            style={{
              width: '90%',
              height: hp(5),
              borderColor: '#b9b9be',
              borderWidth: 1,
              borderRadius: 5,
              marginTop: '2%',
            }}>
            <TextInput style={{marginLeft: 10}} placeholder="Enter your OTP" />
          </View>
        </View>
        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            style={{color: 'red'}}
            value={checked}
            onValueChange={value => setChecked(value)}
          />
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: hp(2.5),
              marginLeft: 10,
            }}>
            Lorum Ipsum dolor sit
          </Text>
        </View>
      </View>

      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{flex: 4, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Pressable
            style={{
              width: wp(50),
              height: hp(8),
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              //singIn()
              props.navigation.navigate('BottomMain', { screen: "HomeScreen" })
            }}>
            <Text
              style={{color: '#fff', fontWeight: 'bold', fontSize: hp(2.8)}}>
              Sign Up
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: hp(2)}}>
            Lorum Ipsum
          </Text>
        </View>
          </View>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;

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
