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
const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(()=>{
    const checkLogin = async ()=>{
      const user = await Auth.get();
      console.log("user")
      console.log(user)
      setIsSignedIn( user != (null || false))
      setIsReady(true);
    }
    if(!isReady)
      checkLogin();
  }, [isReady])


  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <>
          <Navbar></Navbar>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Navbar" component={Navbar}/>


          </Stack.Navigator>
        </>
      )}
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
