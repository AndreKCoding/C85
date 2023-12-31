import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Tela Inicial' component={TabNavigator}/>
            <Stack.Screen name='Tela de Posts' component={PostScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;
