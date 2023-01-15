import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ScrollView, Text } from "react-native";
import Card from "../Card/Card";
import Header from "../Header/Header";
const MyCardList = ({ data, nextRoute }) => {
  return (
    <>
      {data.length > 0 ? (
        <View style={styles.cardListContainer}>
          {data.map((item) => {
            return <Card key={data._id} data={item} nextRoute={nextRoute} />;
          })}
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.testText}>You don't have any items yet!</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "70%",
  },
  cardListContainer: {
    justifyContent: "center",
    overflow: "scroll",
    marginTop: 20,
  },

  testText: {
    alignSelf: "center",
    color: "grey",
  },
});
export default MyCardList;
