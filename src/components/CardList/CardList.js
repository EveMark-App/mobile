import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "../Card/Card";
const MyCardList = ({data}) => {


  return (
    <>
    {data.length >0 ?  (
    <View style={styles.cardListContainer}>

      <FlatList
        data={data}
        listKey="1"
        renderItem={({ item }) => (
          <Card data={item} />
        )}
      />
    </View>
     ) : ""}
     </>
  );
};
const styles = StyleSheet.create({
  cardListContainer: {
    justifyContent: "center",
    overflow: "scroll",
    top: 100,
  },
});
export default MyCardList;
