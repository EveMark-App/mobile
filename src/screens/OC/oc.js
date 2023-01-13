import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Oc({route, navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { eventId } = route.params;







  const HandleCheckin = async ()=>{

    let dataToSend = { eventId:eventId };

    fetch("https://evemark.samikammoun.me/api/event/checkin/" , {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        //Hide Loader
        if(!responseJson.hasOwnProperty("error"))
        {
          Alert.alert('Success', `Successfully Cheked-in ${responseJson.email}`, [
            {text: 'OK', onPress: () => setScanned(false)},
          ]);
        
        }else{
          Alert.alert('Failed', "Check-in failed! Please retry", [
            {text: 'OK', onPress: () => setScanned(false)},
          ]);
        }
      })
      .catch((error) => {
        //Hide Loader
        console.error(error);
      });
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
})