import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Loader from "../../components/loader";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
 
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setError("");
    if (!email.includes('@') || !email.includes('.')){
      alert("Invalid email address");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (!firstName) {
      alert("Please fill first name");
      return;
    }
    if (!lastName) {
      alert("Please fill last name");
      return;
    }
    setLoading(true);
    let dataToSend = {
      email,
      password,
      last_name: lastName,
      first_name: firstName,
    };

    fetch("https://evemark.samikammoun.me/api/user/create", {
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
          navigation.navigate("Login");
        } else {
          setError(responseJson.error);
          console.log(responseJson.error)
          alert("Error while creating your account");
        }
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
        <View style={styles.header}>
        <Text style={styles.title}>Create a new account</Text>
      </View>

      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.Textinput}
          placeholder="FirstName"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.Textinput}
          placeholder="lastName"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.Textinput}
          placeholder="Email Address"
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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text
        style={styles.bottomText}
        onPress={() => navigation.navigate("Login")}
      >
        {" "}
        Already have an account?
      </Text>
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
  bottomText: {
    marginTop: 20,
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
  },
});
