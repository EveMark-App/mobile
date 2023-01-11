import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Loader from "../../components/loader";
import { Button } from "react-native";
import { Auth } from "../../components/Auth";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const handleLogin = () => {
    setErrortext("");
    if (!email) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let dataToSend = { email, password };

    fetch("https://evemark.samikammoun.me/api/user/login", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (!responseJson.hasOwnProperty("error")) {
          await Auth.save(responseJson);
          navigation.navigate("Navbar")
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
        console.log(await Auth.get());
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.Textinput}
          placeholder="Email Address"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.Textinput}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#F5f5f5",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  Textinput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  image: {
    marginBottom: 40,
    width: 100,
    height: 100,
  },
  button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4a1259",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 20,
  },
});
