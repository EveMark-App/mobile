import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// const Card = ({ data }) => {
// {console.log(data.bannerURL)}
//   return (
//     <View style={styles.cardContainer}>
//       <View style={styles.card}>
//         <View style={styles.imageContainer}>
//           <Image source={{
//           uri: data.bannerURL,
//         }} style={styles.image} />
//         </View>
//         <View style={styles.textContainer}>
//           <View>
//             <Text
//               style={{
//                 alignSelf: "center",
//                 fontSize: 8,
//                 top: 2,
//                 fontWeight: "bold",
//               }}
//             >

//               {data.name}
//             </Text>
//           </View>
//           <View style={styles.textFrame}>
//             <Text
//               style={{
//                 alignSelf: "center",
//                 fontSize: 7,
//                 color: "white",
//                 fontWeight: "bold",
//               }}
//             >
//               {" "}
//               Book now{" "}
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     alignItems: "center",
//     justifyContent: "center",

//     left: 0,
//     right: 0,
//   },
//   card: {
//     backgroundColor: "white",
//     width: "80%",
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     shadowOpacity: 0.26,
//     elevation: 5,
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   imageContainer: {
//     flex: 1,
//     aspectRatio: 1,
//     alignSelf: "center",
//   },
//   textContainer: {
//     flex: 1,
//     paddingLeft: 10,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   textFrame: {
//     backgroundColor: "#4a1259",
//     padding: 10,
//     borderColor: "#4a1259",
//     borderWidth: 1,
//     borderRadius: 10,
//     width: 100,
//     height: 30,
//     left: 45,
//     top: 80,
//   },
// });

// export default Card;

const Card = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.banner}
        source={{ uri: "https://dummyimage.com/50x50/000/fff" }}
        resizeMode={"cover"}
      />
      <View style={styles.description}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={styles.title}>Event Title</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category</Text>
          </View>
        </View>
        <View>
          <Text style={{ flexWrap: "wrap", fontSize: 10 }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec qu
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
