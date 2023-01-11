import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './src/components/Navbar/Navbar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketplaceScreen from './src/screens/Marketplace/MarketplaceSreen';
import Login from './src/screens/Authentication/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
