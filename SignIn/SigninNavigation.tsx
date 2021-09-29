import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import LoginScreen  from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen'
const BottomTab = createBottomTabNavigator();
const headerScreen ={
      headerShown: false,
  }
const BottomTabNavigator = () => {
    return (
            <BottomTab.Navigator screenOptions={headerScreen}>
            <BottomTab.Screen name='Login' component={LoginScreen} options={{
                tabBarIcon: ({color: string}) => <FontAwesome name="sign-in" size={24} color="#ff8e8e" />,
                tabBarLabel: () => null
            }}/>
            <BottomTab.Screen name='Signup' component={SignupScreen} options={{
                tabBarIcon: ({ color: string }) =>
                <MaterialCommunityIcons name="login-variant" size={24} color="#ff8e8e" />,
                tabBarLabel: () => null
            }}/>
            </BottomTab.Navigator>
    )
};
export default BottomTabNavigator;