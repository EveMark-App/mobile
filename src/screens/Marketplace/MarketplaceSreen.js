import React, { useState ,useEffect,useCallback} from 'react';
import { View, ScrollView, RefreshControl } from "react-native";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MyCardList from "../../components/CardList/CardList";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const MarketplaceScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <Header />
      <View>
        <SearchBar />
        <ScrollView >
          <MyCardList />
        </ScrollView>
      </View>
    </View>
  );
};

export default MarketplaceScreen;
