import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Card = ({ data }) => {
  const navigation = useNavigation(); 
{console.log(data.bannerURL)}
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{
          uri: data.bannerURL,
        }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 8,
                top: 2,
                fontWeight: "bold",
              }}
            >
             
              {data.name}
            </Text>
          </View>
          <View style={styles.textFrame}>
            <Text onPress={()=>navigation.navigate("Event", {eventId: data._id})}
              style={{
                alignSelf: "center",
                fontSize: 7,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              Book now{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",

    left: 0,
    right: 0,
  },
  card: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  textFrame: {
    backgroundColor: "#4a1259",
    padding: 10,
    borderColor: "#4a1259",
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 30,
    left: 45,
    top: 80,
  },
});

export default Card;
