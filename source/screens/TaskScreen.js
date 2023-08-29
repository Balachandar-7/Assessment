import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CommonIcons from '../components/CommonIcons';
import Colors from '../utils/Colors';
import DetailCard from '../components/DetailCard';
import {connect} from 'react-redux';
function TaskScreen(props) {
    const [info, setInfo] = useState(props?.route?.params?.data)
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
          position: 'Lead',
          date: '21,Jan 2023',
          location: '3rd Floor, 248, 80 Feet Rd, LIG Colony, KK Nagar, Tamil Nadu 625020',
        },
        
      ])
      
      useEffect(()=>{

      },[info])
      console.log("iniiiifo",props?.route?.params?.data);

      useEffect(()=>{
        console.log('Post data in Details screenn', props.postData)
      },[props])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={{flex:12}}>

    
      <View style={{paddingTop: 10, backgroundColor: Colors.white, borderBottomColor: Colors.gray1, borderBottomWidth: 1,}}>
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
              {info?.JobId} - {info?.position}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <CommonIcons
              name="dots-three-vertical"
              type="Entypo"
              style={{marginHorizontal: 15, fontSize: 20}}
            />
          </View>
        </View>
      </View>
      <ScrollView 
      >
      <View style={{backgroundColor: Colors.white, marginTop: '2%' }}>
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
              name="person-circle-sharp"
              type="Ionicons"
              style={{
                fontSize: 35,
                color: Colors.black,
              }}
            />
          </View>
          <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              {info?.JobId} - {info?.position}
            </Text>
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
              }}>
              {info?.companyName}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <CommonIcons
              name="downcircleo"
              type="AntDesign"
              style={{marginHorizontal: 15, fontSize: 20}}
            />
          </View>
        </View>
        
      </View>
      <View style={{paddingTop: 10, backgroundColor: Colors.white, marginTop: '1%' }}>
        <View
          style={[
            {
              flexDirection: 'row',
              marginHorizontal: 15,
              marginVertical: 10,
              alignItems: 'center',
            },
          ]}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors.dark_pink, alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 15,
               // fontWeight: 'bold',
              }}>
              + Add Product
            </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{ width: 30, height: 30, borderRadius: 5, borderColor: Colors.dark_pink, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 5}}>
            <CommonIcons
              name="camera"
              type="Entypo"
              style={{fontSize: 18, color:  Colors.dark_pink,}}
            />
            </View>
            <View style={{ width: 30, height: 30, borderRadius: 5, borderColor: Colors.dark_pink, borderWidth: 1, alignItems: 'center', justifyContent: 'center',marginRight: 5}}>
            <CommonIcons
              name="printer"
              type="MaterialCommunityIcons"
              style={{fontSize: 18, color:  Colors.dark_pink,}}
            />
            </View>
            <View style={{ width: 30, height: 30, borderRadius: 5, borderColor: Colors.text_light_gray, borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
            <CommonIcons
              name="grid"
              type="Ionicons"
              style={{fontSize: 18, color:  Colors.text_light_gray,}}
            />
            </View>

          </View>
        </View>
        
      </View>
      <View style={{flex: 2, paddingTop: 10, backgroundColor: Colors.white, marginBottom: '5%'}}>
      <DetailCard 
              data={data}
              />
      </View>
      <View style={{flex:0.5, marginTop: '5%', marginHorizontal: 15 }}>
      <View style={{}}>
            <Text
              style={{
                color: Colors.black,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Order item summary
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '2%'}}>
            <View style={{ justifyContent: 'flex-start'}}>
            <Text
              style={{
                color: Colors.text_light_gray,
                fontSize: 12,
                
              }}>
             Total Quantity
            </Text>
            </View>

            <View style={{flex:1, alignItems: 'flex-end'}}>
            <Text
              style={{
                color: Colors.text_light_gray,
                fontSize: 15,
                fontWeight: 'bold'
                
              }}>
              06 QTY
            </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}>
            <View style={{ justifyContent: 'flex-start'}}>
            <Text
              style={{
                color: Colors.text_light_gray,
                fontSize: 12,
                
              }}>
            Price Details
            </Text>
            </View>

            <View style={{flex:1,justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
            <Text
              style={{
                color: Colors.dark_pink,
                fontSize: 12,
                fontWeight: 'bold',
                marginRight:5
                
              }}>
              Show More
            </Text>
            <CommonIcons
              name="chevron-down"
              type="FontAwesome"
              style={{
               
                fontSize: 13,
                color: Colors.dark_pink,
              }}
            />

            </View>
          </View>
          <View style={{flex: 2, alignItems: 'flex-start', marginTop :'5%', borderTopWidth: 1, borderTopColor: Colors.light_back_gray,}}>
            <TouchableOpacity style={{paddingHorizontal: 15, paddingVertical: 5,  alignItems: 'center', justifyContent: 'center', borderRadius: 10,borderColor: Colors.font_gray, borderWidth: 1.5, marginTop: '10%' }}>
            <Text
              style={{
                color: Colors.font_gray,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              More Option
            </Text>
            </TouchableOpacity>
          </View>

      </View>
      <View style={{paddingVertical: '20%'}} />
      </ScrollView>
      </View>

    </SafeAreaView>
  );
}
const mapStateToProps = (state) => {
    const postData= state.getJobList.jobData;
    return {
      postData: postData,
    };
  };
  

export default connect(mapStateToProps) (TaskScreen);
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
