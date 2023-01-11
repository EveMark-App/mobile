import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketplaceScreen from '../../screens/Marketplace/MarketplaceSreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import MyEventsScreen from '../../screens/MyEvents/MyEventsScreen';
import MyTicketScreen from '../../screens/MyTicket/MyTicketScreen';
import AuthenticationScreen from '../../screens/Authentication/LoginScreen';

const Tab = createBottomTabNavigator();

const Navbar = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
            <Tab.Screen name="My Events" component={MyEventsScreen} />
            <Tab.Screen name="My Tickets" component={MyTicketScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            
        </Tab.Navigator>
    );
};

export default Navbar;