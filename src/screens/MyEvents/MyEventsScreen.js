import * as React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import MyCardList from '../../components/CardList/CardList';

const MyEventsScreen = () => {
    return(
    <View >
    <Header/>
    <View>
    <SearchBar/>
<View>
  <MyCardList/>
</View>
    </View>
    </View>



  );
  };

export default MyEventsScreen;