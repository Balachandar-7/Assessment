import React, { useState } from "react";
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
  FlatList,
} from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from "./CommonIcons";
import Colors from "../utils/Colors";
import { ListItem, Avatar, Icon, Rating, RatingProps } from "@rneui/themed";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function ListAccord(props) {
  const { data, onPressCard } = props;
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  console.log("aaaaaa", data.name);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{ borderWidth: 1, borderColor: "#cecece" }}>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontSize: hp(2.3),
                fontWeight: "bold",
                color: "#7b7d80",
              }}
            >
              {data?.name}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem>
          <Avatar
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/32.jpg",
            }}
          />
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Avatar
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/36.jpg",
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Albert</ListItem.Title>
            <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem.Chevron />
      </ListItem.Accordion>
    </View>
  );
}

export default ListAccord;

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
