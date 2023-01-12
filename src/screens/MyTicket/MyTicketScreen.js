import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, RefreshControl} from "react-native";
import { ScrollView } from "react-native-web";

import { Auth } from "../../components/Auth";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const MyTicketScreen = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  useEffect(() => {
    const getMyEvents = async () => {
      const user = JSON.parse(await Auth.get());

      const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);

      fetch("https://evemark.samikammoun.me/api/user/get-info/" + user.id, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then(async (responseJson) => {
          //Hide Loader
          console.log(responseJson.my_events);
          setMyEvents(responseJson.my_events);
          setIsReady(true);
        })
        .catch((error) => {
          //Hide Loader
          console.error(error);
        });
    };
    if (!isReady) getMyEvents();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaView>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } >

      </ScrollView>
    </SafeAreaView>
  );
};

export default MyTicketScreen;
