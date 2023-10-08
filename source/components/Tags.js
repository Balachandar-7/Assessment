import React, {useState} from 'react';
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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from './CommonIcons';
import Colors from '../utils/Colors';
import Fonts from '../assets/fonts';

function Tags(props) {
  const {data} = props;

  return (
        <View style={styles.container}>
          {data?.map((itm, ind) => {
            return (
              <View
              key={ind}
                style={styles.tags}>
                <Text style={[Fonts.InterMedium, {color: '#b9c3d5'}]}>{itm}</Text>
              </View>
            );
          })}
        </View>
  );
}

export default Tags;

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'row', 
    marginVertical: '5%', 
    marginHorizontal: 15,  
    flexWrap: 'wrap'
  },
  tags: {
    backgroundColor: '#283959',
    borderRadius: 5,
    padding: '2%',
    marginHorizontal: '2%',
  },
});
