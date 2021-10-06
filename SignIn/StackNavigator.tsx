import React, {useState} from 'react';
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import StackRouter from '../Navigation/StackRouter'
import GetPassword from '../Screens/GetPassword'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './SigninNavigation';
import { EvilIcons, Entypo, Ionicons, MaterialIcons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { StyleSheet, Image, TextInput,Text, View,SafeAreaView, TouchableOpacity, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import VerificationScreen from '../Screens/VerificationScreen';
import VerificationScreenTwo from '../Screens/VerificationScreenTwo';
import styles from './styles'
import Auth from '@aws-amplify/auth';
const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    const headerScreen = {
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerLeft: () => null,
        headerTitle: () => (
          <View style={styles.headerTitle}>
            <Text style={styles.logo}>Be pleasured by Pinky</Text>
            <View style={styles.imageContainer}>
              <Image style={styles.logoimg} source={require('../img/logopinky.png')} />
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity activeOpacity={0.6} >
            <View style={styles.visitorContainer}>
                <Text style={styles.visitorText}>Visitor</Text>
                <MaterialIcons style={styles.eyeIcon}  name="visibility" size={22} color="gray" />
              </View>
          </TouchableOpacity>
        ),
       }
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={!!Auth.user}
          screenOptions={headerScreen} 
          >
            <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Authentication" component={VerificationScreen} />
            <Stack.Screen name="AuthenticationTwo" component={VerificationScreenTwo} />
            <Stack.Screen name="GetPassword" component={GetPassword} />
            <Stack.Screen name="MainScreen" component={StackRouter} options={{header: ()=> null}} />
          </Stack.Navigator>
        </NavigationContainer>
   )   
}

export default StackNavigator;