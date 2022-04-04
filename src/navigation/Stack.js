import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../componets/details';
import Cities from '.././pages/cities';


const Stack = createStackNavigator();
export default function PlaceStackNavigation() {

    return (

        <Stack.Navigator initialRouteName="Cities"
            screenOptions={{ headerBackTitle: "Back" }}
        >
            <Stack.Screen name="Cities" component={Cities}
                options={{ headerShown: false, }} />
            <Stack.Screen name="Cities" component={Details} />
            </Stack.Navigator>

    )
}