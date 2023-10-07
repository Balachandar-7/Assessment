import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import CommonIcons from "../components/CommonIcons";
import Colors from "../utils/Colors";
import DetailCard from "../components/DetailCard";
import { connect } from "react-redux";
function LoginScreen(props) {


  useEffect(() => {}, [info]);
  console.log("iniiiifo", props?.route?.params?.data);

  useEffect(() => {
    console.log("Post data in Details screenn", props.postData);
  }, [props]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.justfyCenter]}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Fonts Screen</Text>
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  const postData = state.getJobList.jobData;
  return {
    postData: postData,
  };
};

export default connect(mapStateToProps)(LoginScreen);
const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  justfyCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
