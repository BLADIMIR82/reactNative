import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/home';
import Cities from '../pages/cities';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
// import Details from "../componets/details"


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cities" component={Cities} />



            <Drawer.Screen name="SignUp" component={SignUp} />
            <Drawer.Screen name="SignIn" component={SignIn} />
        </Drawer.Navigator>

    );
} 