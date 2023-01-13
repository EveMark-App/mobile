import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MyCardList from "../../components/CardList/CardList";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MarketplaceScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const fetchEvents = () => {
    fetch("https://evemark.samikammoun.me/api/event/get-all", {
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
  }

  useEffect(() => {
    fetchEvents();
   
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchEvents()
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
              <ScrollView
       
       refreshControl={
         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
       }>
      <Header />
      <View>
        <SearchBar />

        
          <MyCardList data={data} nextRoute="Event"/>

      </View>
      </ScrollView>
    </View>
  );
};

export default MarketplaceScreen;
