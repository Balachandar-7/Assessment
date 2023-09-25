import React, { useState } from "react";
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
  Pressable
} from "react-native";
import CommonIcons from "../components/CommonIcons";
import { Avatar, Button, Icon } from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


function IntroScreen(props) {


  return (
    <SafeAreaView style={styles.container}>
          <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
          <Image
            source={require("../utils/assets/B.jpeg")}
                  style={{
                      aspectRatio: 1,
                      width: wp(25),
                      height: hp(25),
                      borderRadius: 10
             }}
              />
              <View  style={[ styles.justfyCenter,{marginTop: '5%'}]}>
              <Text style={{ textAlign: 'center', color: '#fff', fontWeight: "bold", fontSize: hp(3.5), marginHorizontal: 15 }}>Lorum Ipsum dolor sit amet Lorem </Text>
        </View>
          </View>
          <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 4, justifyContent: 'flex-end', alignItems: 'center' ,}}>
                  <Pressable
                  style={{width: wp(50), height: hp(8), backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}
                      onPress={() => {
                      props.navigation.navigate("MainScreen",{screen: 'LoginScreen'})
                }}>
              <Text style={{color: '#fff', fontWeight: "bold", fontSize: hp(2.8) }}>LORUM IPSUM</Text>
                </Pressable>
              </View>
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#e4f8d9', fontWeight: "bold", fontSize: hp(2) }}>Lorum Ipsum dolor sit amet</Text>
              <Text style={{color: '#fff', fontWeight: "bold", fontSize: hp(3) }}>Lorum Ipsum</Text>
              </View>

          </View>
    </SafeAreaView>
  );
}

export default IntroScreen
    
    ;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#6dc561'
  },
  justfyCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
