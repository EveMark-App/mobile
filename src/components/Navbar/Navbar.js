import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketplaceScreen from '../../screens/Marketplace/MarketplaceSreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import MyEventsScreen from '../../screens/MyEvents/MyEventsScreen';
import MyTicketScreen from '../../screens/MyTicket/MyTicketScreen';
import AuthenticationScreen from '../../screens/Authentication/LoginScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Navbar = () =>{
    return (
        <Tab.Navigator   screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name="Marketplace" component={MarketplaceScreen} options={{tabBarIcon:()=>{
                return(
                <Icon name="home-analytics" color="#0094D2" size={25}/>
                );
            }}} />
            <Tab.Screen name="My Tickets" component={MyTicketScreen} options={{tabBarIcon:()=>{
                return(
                <Icon name="ticket-percent-outline" color="#0094D2" size={25}/>
                );
            }}}  />
            <Tab.Screen name="My Events" component={MyEventsScreen} options={{tabBarIcon:()=>{
                return(
                <MIcon name="event" color="#0094D2" size={25}/>
                );
            }}}  />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:()=>{
                return(
                <Icon name="account-circle-outline" color="#0094D2" size={25}/>
                );
            }}}  />
            
        </Tab.Navigator>
    );
};

export default Navbar;