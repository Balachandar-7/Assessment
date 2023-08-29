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

function DetailCard(props) {
  const {data, onPressCard} = props;
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });

  const handleClick = (id) =>{
    onPressCard(id)
  }
  const renderItems = ({item}) =>{
    return(
        <TouchableOpacity
       // key={index}
       onPress={()=>{
        handleClick(item?.JobId)
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
        <View style={{flex: 8,}}>
        <View style={{flex: 2, marginBottom: '2%', flexDirection: 'row',  marginHorizontal: 10, marginTop: '5%' }}>
            <View style={{flex: 1, marginRight: 10}}>
                <Image style={{width: 40,height: 40}}
                 source={require('../utils/assets/camera.jpeg')} >
                </Image>
            </View>
            <View style={{flex: 5,}}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              {item?.JobId}
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
              }}>
              {item?.companyName}
            </Text>
</View>

          </View>
          <View style={{flex: 2, flexDirection: 'row', alignItems: 'center',  marginHorizontal: 10 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                 
                
              }}>
            <TouchableOpacity style={{paddingHorizontal: 5, paddingVertical: 5,  alignItems: 'center', justifyContent: 'center', borderRadius: 10,borderColor: Colors.text_light_gray, borderWidth: 1,marginRight: 10,   }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
               // fontWeight: 'bold',
              }}>
              Qty: 06
            </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              $ 343.12
            </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                
              }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
                marginRight :10
                //fontWeight: 'bold',
              }}>
             Net: $ 23.04
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
               // fontWeight: 'bold',
              }}>
             Vat: $ 23.04
            </Text>
            </View>
          </View>
          <View style={{flex: 1.5, flexDirection: 'row',alignItems: 'center', justifyContent: 'flex-end',  marginTop: '2%', borderTopColor: Colors.gray1, borderTopWidth: 1,}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRightColor: Colors.gray1,
                borderRightWidth:1,
                justifyContent: 'center',
                alignItems: 'center'
               

              }}>
              <CommonIcons
                name="copy1"
                type="AntDesign"
                style={{marginRight: 5, fontSize: 20}}
              />
            <Text
            numberOfLines={1}
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: '500'
              }}>
              Copy

            </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRightColor: Colors.gray1,
                borderRightWidth:1,
                justifyContent: 'center',
                alignItems: 'center'
               

              }}>
              <CommonIcons
                name="pause-circle-o"
                type="FontAwesome"
                style={{marginRight: 5, fontSize: 20}}
              />
            <Text
            numberOfLines={1}
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: '500'
              }}>
              Hold
            </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRightColor: Colors.gray1,
                borderRightWidth:1,
                justifyContent: 'center',
                alignItems: 'center'
               

              }}>
              <CommonIcons
                name="circle"
                type="Entypo"
                style={{marginRight: 5, fontSize: 20}}
              />
            <Text
            numberOfLines={1}
              style={{
                color: Colors.black,
                fontSize: 14,
                fontWeight: '500'
              }}>
              Ready

            </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRightColor: Colors.gray1,
                borderRightWidth:1,
                justifyContent: 'center',
                alignItems: 'center'
               

              }}>
              <CommonIcons
                name="trash-2"
                type="Feather"
                style={{marginRight: 5, fontSize: 20}}
              />
            <Text
            numberOfLines={1}
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: '500'
              }}>
              Delete

            </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
            }
  return (
    <View style={{flex: 1, marginHorizontal: 15}}>
      {console.log('data', data)}
      <FlatList 
      data={data}
     // nestedScrollEnabled={true}
      keyExtractor={item => {
        item?.JobId;
      }}
      style={{flex:1,}}  
      renderItem={renderItems}
        />
    </View>
  );
}

export default DetailCard;

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
