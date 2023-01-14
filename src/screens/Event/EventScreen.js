import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const Event = ({ route, navigation }) => {
  const [eventData, setEventData] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const { eventId } = route.params;
  useEffect(() => {
    const getEvent = async () => {
      fetch("https://evemark.samikammoun.me/api/event/get-one/" + eventId, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setEventData(responseJson);
          console.log(responseJson);
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
      <Image style={styles.banner} source={{ uri: eventData.bannerURL }} />

      <View style={styles.row}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{eventData.category}</Text>
        </View>
        <View style={styles.going}>
          <Text style={styles.attendees}>
            {eventData.attendees.length.toString()} Going
          </Text>
          <Icon name="arrowright" size={15} color="blue" />
        </View>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>{eventData.name}</Text>
        <View>
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: Dimensions.get("window").width * 0.04,
            }}
          >
            {eventData.short_description}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: 20,
          marginRight: 20,
          width: 250,
        }}
      >
        <TouchableHighlight
          style={{
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
            width: Dimensions.get("window").width * 0.2,
            height: Dimensions.get("window").width * 0.2,
            backgroundColor: "blue",
            opacity: 0.2,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <FontAwesome
            name="calendar-check-o"
            size={Dimensions.get("window").width * 0.08}
            color="blue"
          />
        </TouchableHighlight>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {eventData.start_date.substring(0, 10)}
          </Text>
          <Text> 8:00 AM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "blue" }}>Add to My Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: 20,
          marginRight: 20,
          width: 250,
        }}
      >
        <TouchableHighlight
          style={{
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
            width: Dimensions.get("window").width * 0.2,
            height: Dimensions.get("window").width * 0.2,
            backgroundColor: "blue",
            opacity: 0.2,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Entypo
            name="location-pin"
            size={Dimensions.get("window").width * 0.1}
            color="blue"
          />
        </TouchableHighlight>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {eventData.location}
          </Text>
          {/* <Text>21 Baker Street</Text> */}
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "blue" }}>See on Maps</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Payment", { eventId: eventData._id })
        }
        style={styles.buy}
      >
        <Text style={{ color: "white" }}>Buy Ticket : </Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {eventData.price["$numberDecimal"].toString() + " TND"}
        </Text>
        <Icon
          name="arrowright"
          size={15}
          color="white"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: "15%",
  },
  banner: {
    width: "100%",
    height: 250,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  category: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "blue",
  },
  categoryText: {
    fontSize: 12,
    color: "blue",
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 7,
    marginRight: 7,
    alignItems: "center",
  },
  going: {
    alignItems: "center",
    flexDirection: "row",
  },
  attendees: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 10,
  },
  title: {
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: Dimensions.get("window").width * 0.08,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 20,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1.5,
    color: "blue",
    marginTop: 10,
  },
  buy: {
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
  },
});
export default Event;
