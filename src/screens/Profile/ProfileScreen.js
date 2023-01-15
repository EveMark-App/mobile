import React, { useState ,useEffect} from 'react';
import {View,RefreshControl, StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from '../../components/Auth';
import QRCode from 'react-native-qrcode-svg';



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const ProfileScreen =({navigation})=>{
  const [profile, setProfile] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProfileData()
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const getProfileData = async ()=>{
    const user = JSON.parse(await Auth.get())
    fetch("https://evemark.samikammoun.me/api/user/get-info/" + user.id, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        setProfile(responseJson);
        setIsReady(true);
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
  }

  useEffect(() => {
    if(!isReady)
    getProfileData();
   
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } >
    <View style={{flexDirection: 'row'}}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../../assets/profile_icon.png')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{profile?.first_name + " " + profile?.last_name}</Title>
            <Caption style={styles.caption}>@{profile?.first_name +profile?.last_name}</Caption>
          <TouchableOpacity style={styles.button} onPress={async ()=> {
        await Auth.delete() 
        navigation.navigate("Login")}} >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
        </View>
      </View>
      </View>
      </View>
    

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>California, USA</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>1 (213) 459-3983</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{profile?.email}</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title style={styles.number}>{profile?.created_events.length.toString()}</Title>
            <Caption>Events Organized</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={styles.number}>{profile?.my_events.length.toString()}</Title>
            <Caption>Events attended</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={styles.number}>{profile?.my_events.length.toString()}</Title>
            <Caption>Tickets</Caption>
          </View>
      </View>
      

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#0094D2" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#0094D2" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="qrcode" color="#0094D2" size={25}/>
            <Text style={styles.menuItemText}>Your QR Code </Text>
          </View>
        </TouchableRipple>
        <View style={{alignItems:"center", marginBottom:"5%"}}>
            <QRCode size={300}

      value={profile?._id}
    />

        </View>
      </View>
      
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  number: {
    color:"#0094D2"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#dddddd',
    borderRightWidth: 1
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    width: "80%",
    borderRadius:10,
    height: 50,
    width:70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,

    flex: 1,
    left:150,
    margintop:10,
    
    
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 20,
  },
  bottomText:{
    marginTop:20
  }
});
