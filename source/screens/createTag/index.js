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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from '../../components/CommonIcons';
import axios from 'axios';
import {homeActions} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {homeSelect} from '../../selector';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function CreateTagScreen(props) {
  const dispatch = useDispatch();
  const chirpzData = useSelector(homeSelect);

  const [caption, setCaption] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const addTags = (newItem) =>{
    setTags(current => [...current, "#"+newItem]);
  }

  // create posts api call
  // how to pass the params, so i am send the details in params, if know the key:values i will post the data.

  const postTags = async () => {
    //POST json
    const params = {
      caption: caption,
      tags: tags,
    }
      dispatch(
        homeActions.addTags(params, response => {
            // console.log("response create tag", response?.data); 
            props.navigation.navigate("Home")            

        }),
      );
  
  };
  useEffect(()=>{
    console.log("addded")
  },[tags])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 40}
        style={[styles.container]}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: '3%',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CommonIcons
                type="FontAwesome5"
                name="arrow-left"
                style={{color: '#fff', fontSize: 35}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 5, alignItems: 'flex-end', marginRight: '5%'}}>
            <TouchableOpacity
            onPress={()=>{
                postTags()
            }}
              style={{
                padding: 8,
                width: wp(20),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffb502',
                borderRadius: 20,
              }}>
              <Text
                style={{color: '#fff', fontWeight: 'bold', fontSize: hp(2)}}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 8, marginTop: '5%'}}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            >
            <View style={{flex: 2, marginHorizontal: 20}}>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: hp(2.5),
                  }}>
                  Create
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  borderBottomColor: '#1c3059',
                  borderBottomWidth: 1,
                }}>
                <TextInput 
                placeholder="What's on your mind?" 
                placeholderTextColor={'#3f4a63'}
                style={{color: '#fff', fontSize: hp(2.5)}}
                value={caption}
                onChangeText={text => {
                    setCaption(text)
                }} 
                />
              </View>
            </View>
            <View style={{flex: 2, marginHorizontal: 20, marginTop: '5%'}}>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: hp(2.5),
                  }}>
                  Add Tags
                </Text>
              </View>
              <View
                style={{
                  flex: 2,
                  borderBottomColor: '#1c3059',
                  borderBottomWidth: 1,
                  flexDirection: 'row'
                }}>
                <TextInput 
                placeholder="Write Tags"
                placeholderTextColor={'#3f4a63'}
                style={{width: '75%', fontSize: hp(2), marginRight: 10, color: '#fff'}}
                value={tag} 
                onChangeText={text => {
                    setTag(text)
                }} />
                {
            tag != "" ?
            <TouchableOpacity
            onPress={()=>{
               addTags(tag)
            }}
              style={{
                padding: 8,
                width: wp(20),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{color: '#fff', fontWeight: 'bold', fontSize: hp(3)}}>
                Add
              </Text>
            </TouchableOpacity>
            :
            null
            }

              </View>
            </View>
            <View style={{flex: 2, flexDirection: 'row', marginVertical: '5%', marginHorizontal: 15, flexWrap: 'wrap'}}>
           {tags != undefined&& tags!= null && tags != [] && tags.map((itm, ind) => {
            return (
              <View
                style={{
                
                  backgroundColor: '#283959',
                  borderRadius: 5,
                  padding: '2%',
                  margin: '2%',
                }}>
                <Text style={{color: '#b9c3d5'}}>{itm}</Text>
              </View>
            );
          })}
        </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default CreateTagScreen;

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
