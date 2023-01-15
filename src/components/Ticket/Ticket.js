import React, { useState, useEffect } from "react";
import { Auth } from "../../components/Auth";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useScrollToTop } from "@react-navigation/native";

const Ticket = ({route, navigation}) => {

  const [eventData, setEventData] = useState({});
  const [user, setUser] = useState({})
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { eventId } = route.params;
  useEffect(() => {
   
    const getEvent = async () => {
      setUser(JSON.parse(await Auth.get()))
      
      fetch("https://evemark.samikammoun.me/api/event/get-one/" + eventId, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setEventData(responseJson);
          setIsReady(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    if (!isReady) getEvent();
  }, [isReady]);

  if (!isReady) {
    return null;
  }


  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View style={styles.top}>
          <View style={{ flex: 0.2 }}>
            <Text style={styles.event}>{eventData.name}</Text>
          </View>
          <View style={{ flex: 0.7 }}>
         
            <QRCode value={user?.id} size={Dimensions.get("window").width * 0.5} />
          </View>
        </View>
        <View style={styles.deco}>
          <View style={styles.left} />
          <View style={styles.dash} />
          <View style={styles.right} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.element}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.info}>{user.first_name +" " + user.last_name}</Text>
          </View>
          <View style={styles.dates}>
            <View style={(styles.element, { flex: 0.5 })}>
              <Text style={styles.title}>Date</Text>
              <Text style={styles.info}>{eventData.start_date.substring(0, 10)}</Text>
            </View>
            <View style={(styles.element, { flex: 0.5 })}>
              <Text style={styles.title}>Time</Text>
              <Text style={styles.info}>08:00 AM</Text>
            </View>
          </View>
          <View style={styles.element}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.info}>{eventData.location}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Download Ticket
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"white",
    justifyContent: "space-evenly",
  },
  ticket: {
    flex: 0.8,
    justifyContent: "flex-start",
    borderRadius: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.85,
  },
  top: {
    flexDirection: "column",
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  bottom: {
    flexDirection: "column",
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  deco: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    backgroundColor: "white",
    borderTopRightRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    borderBottomRightRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    height: 40,
    width: 25,
    borderRightWidth: 1,
    borderLeftColor: "white",
    borderLeftWidth: 0,
    borderRightColor: "lightgray",
  },
  right: {
    backgroundColor: "white",
    borderTopLeftRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    borderBottomLeftRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    height: 40,
    width: 25,
    borderLeftColor: "lightgray",
    borderLeftWidth: 1,
    borderRightColor: "white",
    borderRightWidth: 0,
  },
  dash: {
    height: 1,
    width: Dimensions.get("window").width * 0.85 - 50,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  element: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  dates: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  title: {
    color: "gray",
    fontSize: 14,
  },
  info: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  event: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 20,
    backgroundColor: "blue",
    borderColor: "blue",
    borderWidth: 1.5,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 0.05,
    width: Dimensions.get("window").width * 0.85,
  },
});

export default Ticket;
