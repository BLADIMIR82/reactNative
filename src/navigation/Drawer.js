import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/home';
import Cities from "../pages/cities"
// import UserTabsNavigation from './Tabs'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cities" component={Cities} />
            {/* <Drawer.Screen name="User" component={UserTabsNavigation} />    */}
        </Drawer.Navigator>

    );
}