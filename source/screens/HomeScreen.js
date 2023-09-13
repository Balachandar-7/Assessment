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
} from "react-native";
import CommonIcons from "../components/CommonIcons";
import { Avatar, Button, Icon } from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function HomeScreen(props) {
  const [data, setData] = useState([
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/men/33.jpg",
      value: -201,
    },
    {
      name: "Sara Parker",
      profileImg: "https://randomuser.me/api/portraits/women/37.jpg",
      value: +203,
    },
    {
      name: "Paul Allen",
      profileImg: "https://randomuser.me/api/portraits/men/37.jpg",
      value: +464,
    },
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
      value: -80,
    },
    {
      name: "Terry Andrews",
      profileImg: "https://randomuser.me/api/portraits/women/39.jpg",
      value: -230,
    },
    {
      name: "Andy Vitale",
      profileImg: "https://randomuser.me/api/portraits/men/12.jpg",
      value: +160,
    },
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
      value: -201,
    },
    {
      name: "Sara Parker",
      profileImg: "https://randomuser.me/api/portraits/women/37.jpg",
      value: +203,
    },
    {
      name: "Paul Allen",
      profileImg: "https://randomuser.me/api/portraits/women/23.jpg",
      value: +464,
    },
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/women/23.jpg",
      value: -80,
    },
    {
      name: "Terry Andrews",
      profileImg: "https://randomuser.me/api/portraits/men/43.jpg",
      value: -230,
    },
    {
      name: "Andy Vitale",
      profileImg: "https://randomuser.me/api/portraits/women/57.jpg",
      value: +160,
    },
  ]);

  const renderItems = ({ item }) => {
    let status = Math.sign(item?.value);
    console.log("itemssss", status);
    return (
      <View
        style={{
          flex: 2,
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: "#fff",
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginLeft: 10,
            }}
          >
            <Avatar size={32} rounded source={{ uri: item?.profileImg }} />

            <Text
              style={{
                fontWeight: "bold",
                color: "#9d9d9d",
                fontSize: hp(1.8),
                marginLeft: 15,
              }}
            >
              {item?.name}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <View>
              <Button
                icon={{
                  name: status == +1 ? "caretup" : "caretdown", //:
                  type: "antdesign",
                  size: 15,
                  color: status == +1 ? "#117f13" : "#fc0d1c",
                }}
                // title={item?.value}
                iconContainerStyle={{ alignItems: "center" }}
                buttonStyle={{
                  backgroundColor: status == +1 ? "#dce7da" : "#f4e6e0",
                }}
                containerStyle={{
                  width: wp(20),
                  marginRight: 10,
                  alignItems: "center",
                  borderRadius: 5,
                }}
                titleStyle={{
                  color: status == +1 ? "#117f13" : "#fc0d1c",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {status == +1 ? "+ " : "- "}
                  {Math.abs(item?.value)}
                </Text>
              </Button>
            </View>
            <View>
              <Icon
                name="person-add-sharp"
                type="ionicon"
                color="#808080"
                style={{
                  backgroundColor: "#dedede",
                  width: 40,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f0f1" }}>
      <View
        style={[
          styles.container,
          {
            marginHorizontal: 15,
          },
        ]}
      >
        <View style={{ flex: 1, marginLeft: 15, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 25 }}>
            Growing
          </Text>
        </View>
        <View style={{ flex: 4, backgroundColor: "#ffffff" }}>
          <View style={{ flex: 3, alignItems: "center", flexDirection: "row" }}>
            <View style={{ flex: 1, marginHorizontal: 15 }}>
              <Avatar
                size={150}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#625e8d",
                  fontSize: hp(4),
                }}
              >
                Paul Alen
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "#e7e8ea",
              marginHorizontal: 15,
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                title={"View Profile"}
                buttonStyle={{ backgroundColor: "#dedfe2" }}
                containerStyle={{
                  width: wp(35),

                  borderRadius: 5,
                }}
                titleStyle={{ color: "#8c8c8c", fontWeight: "bold" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                title={"Add User"}
                buttonStyle={{ backgroundColor: "#729970" }}
                containerStyle={{
                  width: wp(35),
                  // marginLeft: 20,
                  borderRadius: 5,
                }}
                titleStyle={{
                  color: "#e6ede5",
                  fontWeight: "bold",
                  fontSize: hp(1.8),
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 5, marginTop: 20 }}>
          <View>
            <FlatList data={data} renderItem={renderItems} />
          </View>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
