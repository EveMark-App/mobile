import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./src/components/Navbar/Navbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Authentication/LoginScreen";
import SignUp from "./src/screens/Authentication/Signup";
import { useEffect, useState } from "react";
import { Auth } from "./src/components/Auth";
import Event from "./src/screens/Event/EventScreen";
import Oc from "./src/screens/OC/oc";
import Payment from "./src/screens/payment/paymentscreen";
import Ticket from "./src/components/Ticket/Ticket";


const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await Auth.get();
      setIsSignedIn(user != null);
      setIsReady(true);
    };
    if (!isReady) checkLogin();
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
      />
      {isSignedIn ? (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Navbar" component={Navbar} />
            <Stack.Screen name="OC" component={Oc} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Ticket" component={Ticket} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Navbar" component={Navbar} />
            <Stack.Screen name="OC" component={Oc} />
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Payment" component={Payment} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
