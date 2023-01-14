import React, { useEffect, useState } from "react";
import { View, RefreshControl, ScrollView, Text } from "react-native";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MyCardList from "../../components/CardList/CardList";
import { Auth } from "../../components/Auth";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const MyEventsScreen = () => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCreatedEvents();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const getCreatedEvents = async () => {
    const user = JSON.parse(await Auth.get());

    fetch("https://evemark.samikammoun.me/api/user/get-info/" + user.id, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        console.log(responseJson.created_events);
        setCreatedEvents(responseJson.created_events);
        setIsReady(true);
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
  };
  useEffect(() => {
    if (!isReady) getCreatedEvents();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View>
      <View>
        <Header />
        <SearchBar />
        <Text
          style={{ alignSelf: "center", color: "grey", fontWeight: "bold" }}
        >
          Click on your event to start scanning Check-In QR Codes
        </Text>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <MyCardList data={createdEvents} nextRoute="OC" />
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
};

export default MyEventsScreen;
