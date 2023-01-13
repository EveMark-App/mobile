import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import Card from "../Card/Card";
const MyCardList = ({data}) => {


  return (
    <>
    {data.length >0 ?  (

    <View style={styles.cardListContainer}>
            <ScrollView>
        {data.map((item)=>{
          return(
            <Card key={data.id} data={item} />
          )
        })}
        </ScrollView>
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
