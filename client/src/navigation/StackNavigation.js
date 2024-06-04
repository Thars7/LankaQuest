import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../screens/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/auth/Login';
import Home from '../screens/Home';
import Description from '../screens/Description';
import Location from '../screens/Location';
import Splash from '../screens/Splash';


const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown: false, statusBarColor:'#255213' }}
                initialRouteName='Splash'
            >
                {/* <Stack.Screen name='Register' component={Register} /> */}
                <Stack.Screen name='Splash' component={Splash}/>
                <Stack.Screen name = "Home" component={Home} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name= 'Description' component={Description}/>
                <Stack.Screen name = 'Location' component={Location} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})