import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./src/components/Navbar/Navbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarketplaceScreen from "./src/screens/Marketplace/MarketplaceSreen";
import Login from "./src/screens/Authentication/LoginScreen";
import SignUp from "./src/screens/Authentication/Signup";
import { useEffect, useState } from "react";
import { Auth } from "./src/components/Auth";
import Event from "./src/screens/Event/EventScreen";
import Card from "./src/components/Card/Card";
import MyCardList from "./src/components/CardList/CardList";

export default function App() {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [isReady, setIsReady] = useState(false);

  // useEffect(()=>{
  //   const checkLogin = async ()=>{
  //     const user = await Auth.get();
  //     setIsSignedIn( user != null)
  //     setIsReady(true);
  //   }
  //   if(!isReady)
  //     checkLogin();
  // }, [isReady])

  // if (!isReady) {
  //   return null;
  // }

  return (
    // <NavigationContainer>
    //   {isSignedIn ? (
    //     <>
    //       <Stack.Navigator screenOptions={{
    //         headerShown: false
    //       }}>

    //         <Stack.Screen name="Navbar" component={Navbar} />
    //         <Stack.Screen name="Event" component={Event}/>
    //         <Stack.Screen name="Login" component={Login} />
    //         <Stack.Screen name="SignUp" component={SignUp} />

    //       </Stack.Navigator>

    //     </>
    //   ) : (
    //     <>
    //       <Stack.Navigator screenOptions={{
    //         headerShown: false
    //       }}>

    //         <Stack.Screen name="SignIn" component={Login} />
    //         <Stack.Screen name="SignUp" component={SignUp} />
    //         <Stack.Screen name="Navbar" component={Navbar}/>
    //         <Stack.Screen name="Event" component={Event}/>

    //       </Stack.Navigator>
    //     </>
    //   )}
    // </NavigationContainer>
    <Card />
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
