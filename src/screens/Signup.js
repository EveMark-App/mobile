import React, { useState } from 'react';
import { View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image, } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSignUp = () => {
    // Perform sign up logic here, such as sending a request to your backend server
    // to create a new user account with the provided email and password
    // You can also add some validation here like checking the passwords match.
  };
  const handleLogin = () => {};

  return (
    <View style={styles.container}>   
  
    <StatusBar style="auto" />
    <Image style={styles.image} source={require("../../assets/logo.png")} />
   
   
    <View style={styles.inputView}>
      <TextInput
        style={styles.Textinput}
        placeholder="FirstName"
          
          onChangeText={(firstName) =>setFirstName(text)}
      />
      </View>

      <View style={styles.inputView}>
      <TextInput
        style={styles.Textinput}
        placeholder="lastName"
          
          onChangeText={(lastName) =>setLastName( text)}
      />
    
      </View>



    <View style={styles.inputView}>
      <TextInput
        style={styles.Textinput}
        placeholder="email address "
          
          onChangeText={(email) => setEmail(email)}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.Textinput}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      
       </View>

      

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
      <Text style={styles.text}> I already have an account</Text>
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
    width: 100, height: 100,
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
    color: '#fff',
    fontWeight: 'bold',
  },
  text:{
    color:"grey",
    marginTop: 20,


  },
});

