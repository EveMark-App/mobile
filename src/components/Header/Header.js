import React  from 'react';
import { View, Image ,TextInput, TouchableOpacity,Text, StyleSheet  } from 'react-native';
export default function Header() {
    return (

        <View style={{ flexDirection: 'row' ,}}>
            <Image
                source={require('../../../assets/logo.png')}
                style={{ position: 'absolute', marginTop:'9%',marginLeft:'6%', width: 20, height: 15 }} />
            <Text style={{position: 'absolute', marginTop:'10%',marginLeft:'38%' ,  width: 100, height: 100, fontSize: 20, color: '#0094D2', fontWeight: 'bold' }}> EveMark </Text>
            <Image
                source={require('../../../assets/Notifications.png')}
                style={{ position:'absolute', top: 40, left: 320, width: 20, height: 20 }} />
            <Image
                source={require('../../../assets/Save.png')}
                style={{ position: 'absolute', top: 40, left: 350, width: 20, height: 20 }} />

        </View>
    );
}