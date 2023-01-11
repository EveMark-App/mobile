import * as React from 'react';
import {Button} from 'react-native';

const MarketplaceScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
  };

export default MarketplaceScreen;