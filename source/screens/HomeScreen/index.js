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

  useEffect(() => {
    if (chirpzData == undefined && chirpzData == null && chirpzData == []) {
      getData();
    } else {
      setData(chirpzData?.listData?.listData);
    }
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getData()
      return () => {
      // Do something when the screen is unfocused
      };
    }, [])
  )
  const renderItems = ({item, index}) => {
    return (
      <View style={{flex: 2}}>
        <View style={{flex: 2, flexDirection: 'row', marginHorizontal: 15}}>
          <Text style={{color: '#fff', marginRight: '5%', fontWeight: 'bold', fontSize: hp(2)}}>
            {item?.userName}
          </Text>
          {
            item?.isVerified ?
          <CommonIcons
            type="AntDesign"
            name="checkcircle"
            style={{color: '#ffb502'}}
          />
          :
          null
  }
        </View>
        <View style={{flex: 2, marginHorizontal: 15, marginTop: 10,}}>
          <Text numberOfLines={5} style={{color: '#93a0c0', fontSize: hp(2)}}>{item?.caption}</Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row', marginVertical: '5%', marginHorizontal: 15,  flexWrap: 'wrap'}}>
          {item?.tags?.map((itm, ind) => {
            return (
              <View
                style={{
                  backgroundColor: '#283959',
                  borderRadius: 5,
                  padding: '2%',
                  marginHorizontal: '2%',
                }}>
                <Text style={{color: '#b9c3d5'}}>{itm}</Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            borderWidth: 0.6,
            borderColor: '#1c3059',
            marginBottom: '5%',
            marginHorizontal: 0,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Image
              source={require('../../utils/assets/ProfilePicture.png')}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
          </View>
          <View style={{flex: 5, justifyContent: 'center', marginLeft: '25%'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: hp(3)}}>
              Chirpz
            </Text>
          </View>
        </View>
        <View
          style={{borderWidth: 0.8, borderColor: '#1c3059', marginBottom: '5%'}}
        />
        <View style={{flex: 8,}}>
          <FlatList
            data={data}
            keyExtractor={item => item?.id}
            renderItem={renderItems}
          />
        </View>
      </View>
      <TouchableOpacity 
      onPress={()=>{
        props.navigation.navigate("CreateTag")
      }}
      style={{width: 50, height: 50, zIndex: +1, position: 'absolute',  bottom: 40, right: 30 }}>
          <CommonIcons
            type="AntDesign"
            name="pluscircle"
            style={{color: '#ffb502', fontSize: 50,}}
          />
        </TouchableOpacity> 

    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#0a1224',
  },
  justfyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
