import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Loader from "../../components/loader";

const months = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];
const years = [
  { label: "2030", value: "2030" },
  { label: "2029", value: "2029" },
  { label: "2028", value: "2028" },
  { label: "2027", value: "2027" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },

  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

export default function Payment({ route, navigation }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState(months[0].value);
  const [cvv, setCvv] = useState("");
  const [selectedValu, setSelectedValu] = useState(years[7].value);
  const { eventId } = route.params;
  const [error1, setError1] = useState(null);

  const validateCardNumber = (cardNumber) => {
    
    const  regex =  /^[0-9]{12,19}$/;
    return regex.test(cardNumber) ;
   };
 
   const handlecardnumberChange = (text) => {setCardNumber(text);
     setError(null);
   };
   
   const validateCvv = (cvv) => {
    
     const regex1 =  /^[0-9]{3,4}$/;
     return regex1.test(cvv);
   }
   
 
   const handlecvvChange = (text) => {setCvv(text);
     setError1(null);
   };
 
  const onSubmit = () => {
    setLoading(true);
    fetch("https://evemark.samikammoun.me/api/event/buy", {
      method: "POST",
      body: JSON.stringify({ eventId }),
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        // If server response message same as Data Matched
        setLoading(false);
        if (!responseJson.hasOwnProperty("error")) {
          console.log("suceessful");
          Alert.alert("Success", "Payment Successful", [
            { text: "OK", onPress: () => navigation.navigate("Marketplace") },
          ]);
        } else {
          Alert.alert("Failed", responseJson.error, [
            { text: "OK", onPress: () => console.log("failed") },
          ]);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });

      if (!validateCardNumber(cardNumber)) {
        setError ('Invalid card number');
   
      }  else {
        setError('');
      
      }
      if (!validateCvv(cvv)){
  
        setError1 ('Invalid cvv');
  
      } else {
        setError1('');
      }

  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Loader loading={loading} />

      <View style={styles.header}>
        <Text style={styles.title}>Payment details</Text>
      </View>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.inputView}>
          <TextInput
            style={styles.textField}
            placeholder="Cardholder Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textField}
            placeholder="Card Number"
            value={cardNumber}
            keyboardType="numeric"
            onChangeText={(handlecardnumberChange) => {
              setCardNumber(handlecardnumberChange);
           
              }}
              />
             {error && <Text style={{ color: 'red' }}>{error}</Text>}
          
        </View>
        <View>
          <Text
            style={[
              styles.exp,
              {
                justifyContent: "center",
              },
            ]}
          >
            Expiration date:
          </Text>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.box,
              {
                marginRight: 24,
              },
            ]}
          >
            <Picker
              selectedValue={selectedValu}
              style={{
                height: 30,
                width: 120,
                color: "grey",
                alignItems: "center",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValu(itemValue)
              }
            >
              {years.map((year) => (
                <Picker.Item
                  key={year.value}
                  label={year.label}
                  value={year.value}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.box}>
            <Picker
              selectedValue={selectedValue}
              style={{
                height: 30,
                width: 120,
                color: "grey",
                alignItems: "center",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              {months.map((month) => (
                <Picker.Item
                  key={month.value}
                  label={month.label}
                  value={month.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
            style={styles.textField}
            placeholder="Security Code"
            value={cvv}
            keyboardType="numeric"
            onChangeText={(handlecvvChange) => {
              setCvv(handlecvvChange);
           
              }}
              />
             {error1 && <Text style={{ color: 'red' }}>{error1}</Text>}
          
              
          
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    paddingtop: 50,
  },
  box: {
    backgroundColor: "#Fff",

    paddingBottom: 20,

    marginBottom: 50,

    alignItems: "center",
  },
  textField: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "grey",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 0.3,
    width: "70%",
    height: 45,
    marginBottom: "5%"
    
  },
  button: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4a1259",
  },
  content: {
    paddingTop: 96,
    paddingHorizontal: 36,
  },
  title: {
    color: "#4a1259",
    fontSize: 32,
    marginBottom: 32,

    margintop: 10,
    alignItems: "center",
  },
  tilebox: {
    width: "40%",
    height: 50,
    backgroundColor: "#4a1259",
  },
  exp: {
    color: "black",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    fontSize: "bold",
  },
});
