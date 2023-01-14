import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import { Auth } from "../../components/Auth";
import MyCardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const MyTicketScreen = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMyEvents();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = myEvents.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(myEvents);
      setSearch(text);
    }
  };

  const getMyEvents = async () => {
    const user = JSON.parse(await Auth.get());
    fetch("https://evemark.samikammoun.me/api/user/get-info/" + user.id, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        console.log(responseJson.my_events);
        setMyEvents(responseJson.my_events);
        setFilteredDataSource(responseJson.my_events);

        setIsReady(true);
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
  };

  useEffect(() => {
    if (!isReady) getMyEvents();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        <SearchBar
          searchText={search}
          onChangeText={(text) => searchFilterFunction(text)}
        />

        <MyCardList data={filteredDataSource} nextRoute="Event" />
      </ScrollView>
    </View>
  );
};

export default MyTicketScreen;
