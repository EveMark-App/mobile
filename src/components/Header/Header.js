import React from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>EveMark</Text>
      </View>

      <View style={styles.void} />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons
            name="notifications"
            size={Dimensions.get("window").width * 0.06}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Ionicons
            name="bookmark"
            size={Dimensions.get("window").width * 0.06}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: 20,
    alignItems: "center",
    height: Dimensions.get("window").width * 0.12,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.5,
  },
  logoImage: {
    width: Dimensions.get("window").width * 0.12,
    height: Dimensions.get("window").width * 0.12,
  },
  logoText: {
    fontSize: Dimensions.get("window").width * 0.07,
    fontWeight: "bold",
    color: "black",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.3,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
  },
  void: {
    flex: 0.2,
  },
});
