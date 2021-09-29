import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header/header'
import LoginScreen from '../Screens/LoginScreen'
import RatingScreen from '../Screens/RatingScreen'
import { Entypo, Ionicons, MaterialIcons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Landing from '../Components/LandingPage/Landing'
import SliderList from '../Components/Slider/SliderList'
import ServiceScreen from '../Screens/ServiceScreen'
import FeedScreen from '../Screens/FeedScreen'
import DetailsScreen from '../Screens/DetailsScreen'
const BottomTab = createBottomTabNavigator();
const headerScreen ={
      headerShown: false,
  }
  const HomeScreen = () => {
    const [storeItemsCount, setStoreItemsCount] = useState(0)

    return(
      <SafeAreaView style={styles.container}>
          <SliderList />
      </SafeAreaView>
    )
  }
const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={headerScreen}>
          <BottomTab.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon: ({ color: string }) =>
            <  Entypo name="home" size={20} color="black" />,
            tabBarLabel: () => null
          }}/>
          <BottomTab.Screen name='Services' component={ServiceScreen} options={{
            tabBarIcon: ({color: string}) => <FontAwesome5 name="shopping-bag" size={18} color="pink" />,
            tabBarLabel: () => null
          }}/>
          <BottomTab.Screen name='Blog' component={FeedScreen} options={{
            tabBarIcon: ({color: string}) => <MaterialIcons name="dynamic-feed" size={20} color="black" />,
            tabBarLabel: () => null
          }}/> 
          <BottomTab.Screen name='RatinFeeds' component={RatingScreen} options={{
            tabBarIcon: ({color: string}) => <Entypo name="star" size={20} color="black" />,
            tabBarLabel: () => null
          }}/> 
        </BottomTab.Navigator>
    )
};

const styles = StyleSheet.create({
    search: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      width: 200,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    headerScreenStyle: {
  
    },
    shopping :{
      width: 50,
      padding: 10,
      alignItems: 'center',
      marginRight: 20
  },
  shop: {
  
  },
  badge:{
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'black',
      zIndex: 999999,
      fontSize: 14,
      padding: 1,
  },
  });
export default BottomTabNavigator;