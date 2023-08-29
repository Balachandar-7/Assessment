import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonIcons from '../components/CommonIcons';
import Colors from '../utils/Colors';
import JobCard from '../components/JobCards';
import axios from 'axios';
import {connect} from 'react-redux';
import { getJoblistApiCall } from '../redux/action/getJobs';
function JobScreen(props) {
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  //sample data 
  const [data, setData] = useState([
    {
      name:'Bala',
      JobId: "BMID - 1",
      companyName: 'Egrove System',
      position: 'Lead',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 2",
      companyName: 'Egrove System',
      position: 'Developer',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 3",
      companyName: 'Egrove pvt ltd',
      position: 'Lead',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 4",
      companyName: 'Egrove 12',
      position: 'Lead',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 5",
      companyName: 'Egrove 234 ',
      position: 'Lead',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 6",
      companyName: 'Egrove 5555',
      position: 'Manager',
      date: '21,Jan 2023',
      location: '248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    {
      name:'Bala',
      JobId: "BMID - 7",
      companyName: 'Egrove System333',
      position: 'Lead111',
      date: '21,Jan 2023',
      location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
    },
    
  ])
  const handleClick = (data) =>{
   
    props.navigation.navigate("TaskScreen",{data: data})
    
  }
  const getList = async () =>{
      props.getJoblistApiCall()
  }
  useEffect(()=>{
    getList()
  },[])
// Job listing data example for redux call and get the information from the store sample API is not get i the our requirement.
  useEffect(()=>{
    console.log('Post data', props.postData)
  },[props])

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{flex: 1}}>
        <View style={styles.container}>

          <View style={{ paddingTop: 10, backgroundColor: Colors.white}}>
            <View
              style={[
                {
                  
                  flexDirection: 'row',
                  marginHorizontal: 5,
                  marginVertical: 10,
                  alignItems: 'center',
                },
              ]}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <CommonIcons
                  name="chevron-left"
                  type="FontAwesome"
                  style={{
                    marginHorizontal: 15,
                    fontSize: 20,
                    color: Colors.black,
                  }}
                />
              </View>
              <View style={{flex: 5, alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  All Jobs
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <CommonIcons
                  name="filter"
                  type="AntDesign"
                  style={{marginHorizontal: 15, fontSize: 20}}
                />
                <CommonIcons
                  name="notifications-outline"
                  type="Ionicons"
                  style={{marginHorizontal: 15, fontSize: 20}}
                />
              </View>
            </View>
            <View style={{  height: 50, marginHorizontal: 15,  }}>
              <View 
                style={{
                  //flex:1,
                  width: '100%',
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: Colors.text_light_gray,
                  borderRadius: 30,
                  backgroundColor: Colors.gray1
                }}>
                  <View style={{flex:0.5,alignItems: 'center', marginLeft: 10}}>
                  <CommonIcons
                  name="search"
                  type="Ionicons"
                  style={{fontSize: 20}}
                />
                  </View>

                  <View style={{flex:6}}>
                <TextInput
                  style={{
                    height: 40,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    width: '90%',
                    //justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  placeholder='Search'
                />
                </View>
              </View>
            </View>
          </View>

          <View style={{flex:10, backgroundColor: Colors.btn_back_blue, }}>        
            <ScrollView style={{flex:10,marginHorizontal: 15, }}>
              <JobCard 
              data={data}
              onPressCard={handleClick}
              />

            </ScrollView>
            {/* <View style={{padding: '4%'}} /> */}
            </View>


          {/* <TouchableOpacity onPress={() => {
            props.navigation.navigate("EditScreen")
        }} tyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text style={{backgroundColor: 'red', color: 'green'}}>Home Screen</Text>
        <CommonIcons name="rocket"  type='FontAwesome' />
        </TouchableOpacity> */}
        </View>
        </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
  const postData= state.getJobList.jobData;
  return {
    postData: postData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getJoblistApiCall: () => dispatch(getJoblistApiCall()),
});
export default connect(mapStateToProps, mapDispatchToProps) (JobScreen);

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
