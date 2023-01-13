import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = () => {
      console.log(`Searching for ${searchTerm}`);
      // perform search
    }

    return (
      <View style={{ alignItems: 'center', marginBottom:100 }}>
        <View style={{ flexDirection: "row", alignItems: "center", top:40 , padding: 10}}>
          <TextInput
          style={{ width: 400, height: 30, top:35, borderWidth: 0.5, borderRadius: 10,borderColor: 'grey',flex: 1, padding: 7,top:40 }}
          placeholder="event"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <View>
    
        <TouchableOpacity style={{ width: 80, height: 30, top:35, borderRadius: 10 ,borderWidth: 3, borderColor: '#4a1259',backgroundColor: "#4a1259", top:40,right :15, padding: 8, marginLeft: 20, justifyContent: "center", alignItems: "center" }} onPress={handleSubmit}>
<Text style={{ color: "white" ,fontSize:7}}>Search</Text>
</TouchableOpacity>
          
        </View>
        </View>
        </View>
        
  
     
    );

};







export default SearchBar;







