import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from '../../components/CommonIcons';
import axios from 'axios';
import {homeActions} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {homeSelect} from '../../selector';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFocusEffect } from '@react-navigation/native';
import Tags from '../../components/Tags';
import Fonts from '../../assets/fonts';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const chirpzData = useSelector(homeSelect);
  const [data, setData] = useState([]);


  //get list data api call 

  const getData = () => {
    dispatch(
      homeActions.getListData(response => {
        setData(response?.data?.body);
      }),
    );
  };



  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>
            Home screen
          </Text>
        </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  profile:{width: 50, height: 50, resizeMode: 'contain'},
  justfyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon:{width: 50, height: 50, zIndex: +1, position: 'absolute',  bottom: 40, right: 30},
  line:{borderWidth: 0.8, borderColor: '#1c3059', marginBottom: '5%'}


});
