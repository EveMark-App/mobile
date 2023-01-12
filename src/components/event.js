import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const Event = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={require("../assets/kenza.jpg")} />

      <View style={styles.row}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Category</Text>
        </View>
        <View style={styles.going}>
          <Text style={styles.attendees}>300 Going</Text>
          <Icon name="arrowright" size={15} color="blue" />
        </View>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>Event Title</Text>
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
              fontSize: Dimensions.get("window").width * 0.045,
              fontWeight: "bold",
            }}
          >
            January 12, 2022
          </Text>
          <Text>Thursday, 8:00 AM</Text>
          <Pressable style={styles.button}>
            <Text style={{ color: "blue" }}>Add to My Calendar</Text>
          </Pressable>
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
              fontSize: Dimensions.get("window").width * 0.045,
              fontWeight: "bold",
            }}
          >
            Grand Avenue Center
          </Text>
          <Text>21 Baker Street</Text>
          <Pressable style={styles.button}>
            <Text style={{ color: "blue" }}>See on Maps</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.buy}>
        <Text style={{ color: "white" }}>Buy Ticket</Text>
        <Icon
          name="arrowright"
          size={15}
          color="white"
          style={{ marginLeft: 20 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
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
  titleText: {
    fontSize: Dimensions.get("window").width * 0.1,
    color: "black",
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
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
