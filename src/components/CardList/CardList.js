import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Card from "../Card/Card";
const MyCardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.123.45:3001/event/get-all", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        
        setData(responseJson);
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
  }, []);

  return (
    <>
    {data.length >0 ?  (
    <View style={styles.cardListContainer}>

      <FlatList
        data={data}
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
