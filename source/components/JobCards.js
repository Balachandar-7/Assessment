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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from './CommonIcons';
import Colors from '../utils/Colors';

function JobCard(props) {
  const {data, onPressCard} = props;
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const handleClick = (item) =>{
    onPressCard(item)
  }
  const renderItems = ({item}) =>{
    return(
        <TouchableOpacity
       // key={index}
       onPress={()=>{
        handleClick(item)
       }}
        style={{
          flex: 2,
          backgroundColor: Colors.white,
          borderWidth: 1,
          borderColor: Colors.gray1,
          height: 150,
          marginTop: 10,
          borderRadius: 10,
          shadowColor: Colors.text_light_gray,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 2
        }}>
        <View style={{flex: 8, margin: 15}}>
          <View style={{flex: 2, marginBottom: '2%'}}>
            <Text
              style={{
                color: Colors.sky_blue,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {item?.JobId}
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item?.companyName}
            </Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row', marginTop: '7%'}}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
              }}>
              <CommonIcons
                name="briefcase-clock-outline"
                type="MaterialCommunityIcons"
                style={{marginRight: 10, fontSize: 20, color: Colors.black}}
              />
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item?.position}
            </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                
              }}>
              <CommonIcons
                name="calendar"
                type="AntDesign"
                style={{marginRight: 10, fontSize: 20}}
              />
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
             {item?.date}
            </Text>
            </View>
          </View>
          <View style={{flex: 2, flexDirection: 'row', marginTop: '2%'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <CommonIcons
                name="location-outline"
                type="Ionicons"
                style={{marginRight: 10, fontSize: 20}}
              />
            <Text
            numberOfLines={1}
              style={{
                color: Colors.black,
                fontSize: 15,
                width: '93%'
              }}>
              {item?.location}

            </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
            }
  return (
    <View style={{flex: 1, paddingBottom:"30%"}}>
      {console.log('data', data)}
      {/* {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flex: 2,
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.gray1,
              height: 150,
              marginTop: 10,
              borderRadius: 10,
              shadowColor: Colors.text_light_gray,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 2
            }}>
            <View style={{flex: 8, margin: 15}}>
              <View style={{flex: 2, marginBottom: '2%'}}>
                <Text
                  style={{
                    color: Colors.sky_blue,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {item?.JobId}
                </Text>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {item?.companyName}
                </Text>
              </View>
              <View style={{flex: 2, flexDirection: 'row', marginTop: '5%'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <CommonIcons
                    name="filter"
                    type="AntDesign"
                    style={{marginRight: 10, fontSize: 20}}
                  />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {item?.position}
                </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    
                  }}>
                  <CommonIcons
                    name="filter"
                    type="AntDesign"
                    style={{marginRight: 10, fontSize: 20}}
                  />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                 {item?.date}
                </Text>
                </View>
              </View>
              <View style={{flex: 2, flexDirection: 'row', marginTop: '2%'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <CommonIcons
                    name="location-outline"
                    type="Ionicons"
                    style={{marginRight: 10, fontSize: 20}}
                  />
                <Text
                numberOfLines={1}
                  style={{
                    color: Colors.black,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {item?.location}

                </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })} */}
      <FlatList 
      data={data}
      keyExtractor={item => {
        item?.JobId;
      }}
      style={{flex:1,}}  
      renderItem={renderItems}
        />
    </View>
  );
}

export default JobCard;

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  justfyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
