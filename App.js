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
  useEffect(  ()=>{
     Auth.delete()
    setIsSignedIn( false)

  }, [isSignedIn])

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
