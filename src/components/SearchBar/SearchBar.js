import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = ({searchText, onChangeText, handleSubmit}) => {



  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          onChangeText={onChangeText}
          placeholderTextColor="black"
          value={searchText}
        />
        <View>
          <TouchableOpacity onPress={handleSubmit}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons
            name="search"
            size={Dimensions.get("window").width * 0.06}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
    height: Dimensions.get("window").width * 0.12,
  },
  searchContainer: {
    flex: 0.8,
    backgroundColor: "lightgray",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.15,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
  },
});

export default SearchBar;
