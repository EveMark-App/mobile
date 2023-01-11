

import AsyncStorage from '@react-native-async-storage/async-storage';


export const Auth = {
    save: async (userData)=>{
        try{
            await AsyncStorage.setItem("userData", JSON.stringify(userData)); 
        }catch(error){
            return null
        }
    },
    get:async ()=>{
        try{
            return await AsyncStorage.getItem('userData')
        }
        catch(error){
            console.log(error)
            return null;
        }
    },
    delete: async ()=>{
        try {
            await AsyncStorage.removeItem('userData')
          } catch(e) {
            return null;
        }
    }
}