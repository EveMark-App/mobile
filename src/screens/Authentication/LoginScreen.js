import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,

} from "react-native";
import Loader from "../../components/loader";
import { Button } from "react-native";
import { Auth } from "../../components/Auth";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email address");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
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
        // If server response message same as Data Matched
        if (!responseJson.hasOwnProperty("error")) {
          await Auth.save(responseJson);
          navigation.navigate("Navbar");
        } else {
          setErrortext(responseJson.msg);
<<<<<<< Updated upstream
          alert(responseJson.error);
          console.log("Please check your email id or password");
=======
          alert("Please check your email id or password");
>>>>>>> Stashed changes
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
 
  return (
    <KeyboardAvoidingView  style={styles.container}>
  
     
      <Loader loading={loading} />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to EveMark!</Text>
      </View>

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
<<<<<<< Updated upstream
      <Text
        style={styles.bottomText}
        onPress={() => navigation.navigate("SignUp")}
      >
        {" "}
        Don't have an account yet?
      </Text>
    </View>
=======
      <Text style={styles.bottomText} onPress={()=> navigation.navigate('SignUp')}> Don't have an account yet?</Text>
   
    </KeyboardAvoidingView>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  bottomText: {
    marginTop: 20,
=======
  bottomText:{
    marginTop:20
  },

  title: {
    color: "#4a1259",
    fontSize: 42,
    marginBottom: 52,
    fontWeight: "bold",
    fontFamily:'Roboto',
    margintop: 10,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    fontSize: "bold",
>>>>>>> Stashed changes
  },
});
