import React, { useEffect, useState ,useCallback} from "react";
import { Text, SafeAreaView,ScrollView, RefreshControl, View } from "react-native";
import { Auth } from "../../components/Auth";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const MyTicketScreen = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMyEvents();
    wait(1000).then(() => setRefreshing(false));
  }, []);

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
      ></ScrollView>
    </View>
  );
};

export default MyTicketScreen;
