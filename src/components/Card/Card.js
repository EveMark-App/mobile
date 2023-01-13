import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const Card = ({ data }) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Event", {eventId: data._id})} style={styles.container}>
      <Image
        style={styles.banner}
        source={{
          uri: data.bannerURL,
        }}
        resizeMode={"cover"}
      />
      <View style={styles.description}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.title}>{data.name.substring(0,20)+"..."}</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>{data.category}</Text>
          </View>
        </View>
        <View>
          <Text style={{ flexWrap: "wrap", fontSize: 10 }}>
            {data.short_description}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Entypo name="location-pin" size={15} color="blue" />
          <Text style={styles.location}>Grand Avenue Center, Indonesia</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 250,
    flexDirection: "column",
    borderColor: "gray",
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginBottom: 25,
    alignSelf:"center"
  },
  bannerContainer: {
    flex: 1,
    aspectRatio: 1,
    flexDirection: "row",
  },
  banner: {
    width: "100%",
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  },
  description: {
    marginHorizontal: 20,
  },
  category: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "blue",
    marginLeft: 10,
  },
  categoryText: {
    fontSize: 10,
    color: "blue",
    alignItems: "center",
    marginHorizontal: 7,
    marginBottom: 2,
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  date: {
    backgroundColor: "white",
    color: "blue",
    fontSize: 15,
  },
});

export default Card;
