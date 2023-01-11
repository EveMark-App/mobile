import React , { useState }from 'react';
import { View, FlatList ,StyleSheet} from 'react-native';
import Card from '../Card/Card';
const MyCardList = () => {
const [data , setData]= useState([
  { id: 1, imagePath:require('../../../assets/mts.jpg'), text: 'Card 1' },
  { id: 2, imagePath:require('../../../assets/mts.jpg'), text: 'Card 2' },
  { id: 3, imagePath:require('../../../assets/mts.jpg'), text: 'Card 3' },
  { id: 4, imagePath:require('../../../assets/mts.jpg'), text: 'Card 4' },
  { id: 5, imagePath:require('../../../assets/mts.jpg'), text: 'Card 5' },
  { id: 6, imagePath:require('../../../assets/mts.jpg'), text: 'Card 6' },
  { id: 7, imagePath:require('../../../assets/mts.jpg'), text: 'Card 7' },
  { id: 8, imagePath:require('../../../assets/mts.jpg'), text: 'Card 8' },
  { id: 9, imagePath:require('../../../assets/mts.jpg'), text: 'Card 9' },
  { id: 10,imagePath:require('../../../assets/mts.jpg'), text: 'Card 10' },
  { id: 11, imagePath:require('../../../assets/mts.jpg'), text: 'Card 1' },
  { id: 12, imagePath:require('../../../assets/mts.jpg'), text: 'Card 2' },
  { id: 13, imagePath:require('../../../assets/mts.jpg'), text: 'Card 3' },
  { id: 14, imagePath:require('../../../assets/mts.jpg'), text: 'Card 4' },
  { id: 15, imagePath:require('../../../assets/mts.jpg'), text: 'Card 5' },
  { id: 16, imagePath:require('../../../assets/mts.jpg'), text: 'Card 6' },
  { id: 17, imagePath:require('../../../assets/mts.jpg'), text: 'Card 7' },
  { id: 18, imagePath:require('../../../assets/mts.jpg'), text: 'Card 8' },
  { id: 19, imagePath:require('../../../assets/mts.jpg'), text: 'Card 9' },
  { id: 20, imagePath:require('../../../assets/mts.jpg'), text: 'Card 10' }
]);

  return (
    
    <View style={styles.cardListContainer }>
        <FlatList 
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
          <Card imageUri={item.imagePath} text={item.text} />
        
    
          )}
        />
        </View>
      );
    };
    const styles = StyleSheet.create({
        cardListContainer: {

            justifyContent: 'center',
          overflow: 'scroll',
          top:150,
          elevation: 10,
          


        },

    
    });
export default MyCardList;