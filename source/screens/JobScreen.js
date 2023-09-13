import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Platform,
} from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from "../components/CommonIcons";
import Colors from "../utils/Colors";
import ListAccord from "../components/List";
import {
  ListItem,
  Avatar,
  Icon,
  Rating,
  RatingProps,
  Button,
  AirbnbRating,
} from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function JobScreen() {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  //sample data
  const [data, setData] = useState([
    {
      name: "Appointment",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "Trips",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Password",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Pitches",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
    {
      name: "Updates",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ]);
  const [cardData, setCardData] = useState([
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Sara Parker",
      profileImg: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
      name: "Paul Allen",
      profileImg: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Terry Andrews",
      profileImg: "https://randomuser.me/api/portraits/women/39.jpg",
    },
    {
      name: "Andy Vitale",
      profileImg: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "John Smith",
      profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
    },
  ]);

  const CardItems = ({ data }) => {
    console.log("dataaaaa", data);
    return (
      <View style={{ flex: 3, marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar size={40} source={{ uri: data?.profileImg }} />
          <Text style={{ color: "#000000", fontSize: hp(2), marginLeft: 10 }}>
            {data.name}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#f7f7f7",
          paddingVertical: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#000000", fontSize: hp(3) }}>
          List
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#e9e9ee",
            marginVertical: 10,
          }}
        >
          <>
            <ListItem>
              <Avatar
                size={32}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/5.jpg",
                }}
              />
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: hp(2.2),
                    fontWeight: "bold",
                    color: "#7b7f82",
                  }}
                >
                  Limited supply! its like digital gold!
                </ListItem.Title>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* <Rating
          //showRating
          imageSize={40}
          //onFinishRating={ratingCompleted}
          readonly
          style={{ paddingVertical: 10}}
        /> */}
                  <AirbnbRating
                    size={20}
                    reviews={[]}
                    reviewSize={0}
                    starContainerStyle={{ marginTop: -20, marginRight: 15 }}
                  />
                  <ListItem.Subtitle style={{ fontSize: hp(1.8) }}>
                    5 months ago
                  </ListItem.Subtitle>
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </>
        </View>
        <View style={{ flex: 5 }}>
          <>
            {data.map((l, i) => (
              <ListAccord data={l} />
            ))}
          </>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: "10%",
            }}
          >
            <Button
              title="Button1"
              color={"#ffffff"}
              titleStyle={{ color: "#63676b" }}
              containerStyle={{
                width: 150,

                borderRadius: 0,
              }}
            />
            <Button
              title="Button2"
              color={"#e4e2e2"}
              titleStyle={{ color: "#63676b" }}
              containerStyle={{
                width: 150,
                borderRadius: 0,
              }}
            />
          </View>
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 4,
                backgroundColor: "#ffffff",
                marginHorizontal: 25,
                paddingBottom: "5%",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#625e8d",
                    fontSize: hp(2.5),
                  }}
                >
                  CARD WITH DIVIDER
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: "#e7e8ea",
                  marginHorizontal: 15,
                  marginVertical: 10,
                }}
              />
              {cardData.map((item1, index) => {
                return <CardItems data={item1} />;
              })}
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: "5%" }} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobScreen;

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
