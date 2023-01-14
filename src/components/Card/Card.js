import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data, nextRoute }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(nextRoute, { eventId: data._id })}
      style={styles.container}
    >
      <Image
        style={styles.banner}
        source={{
          uri: data.bannerURL,
        }}
        resizeMode={"cover"}
      />
      <View style={styles.description}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{data.category}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.title}>
              {data.name.substring(0, 20) + "..."}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ flexWrap: "wrap", fontSize: 10 }}>
            {data.short_description.substring(0, 100) + "..."}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Entypo name="location-pin" size={15} color="blue" />
          <Text style={styles.location}>{data.location}</Text>
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
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginBottom: 25,
    alignSelf: "center",
    elevation: 2,
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
    alignItems: "baseline",
  },
  description: {
    marginHorizontal: 20,
    alignItems: "baseline",
  },
  category: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "blue",
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
    fontSize: 18,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  location: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  dateContainer: {
    backgroundColor: "white",
    color: "blue",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Card;
