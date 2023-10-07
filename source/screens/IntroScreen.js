import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import axios from "axios";

function IntroScreen(props) {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
      .then((response) => {
        console.log("response", response?.data?.photos);
        setData(response?.data?.photos);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItems = ({ item, index }) => {
    
    return (
      <TouchableOpacity
        key={index}

        style={{
          flex: 5,
          marginVertical: 10,
          alignItems: "center",
          borderRadius: 10
        }}
        onPress={() => {
          props.navigation.navigate("HomeScreen")
        }}
        >
          <Image
          source={{uri: item?.url}}
          style={{width: 300, height: 200, borderRadius: 10}}
          />
          
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 15, marginVertical: 10 }}>
      <View
        style={{
          flex: 5,
          marginVertical: 10,
          alignItems: "center"
        }}
      >
        <ScrollView scrollEnabled={true} style={{ flex: 5 }}>
          <FlatList
            style={{ flex: 5 }}
            scrollEnabled
            data={data}
            renderItem={renderItems}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default IntroScreen;
