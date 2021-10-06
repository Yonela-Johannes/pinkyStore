import React, {useState, useEffect} from 'react';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports'
import {Auth} from 'aws-amplify'
import SignupScreen from '../Screens/SignupScreen'
import ServiceScreen from '../Screens/ServiceScreen';
import LoginScreen  from '../Screens/LoginScreen';
import AddressScreen from '../Screens/AddressScreen';
import ProfilePicture from '../Components/ProfilePicture/ProfilePicture'
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart';
import NewPost from '../Components/NewPost/NewPost';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Image, Text, View, TouchableOpacity, Platform} from 'react-native';
import { getUser } from '../src/graphql/queries'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import Product from '../Components/Product/Product';
import { API, graphqlOperation } from 'aws-amplify'

const Stack = createNativeStackNavigator();
Amplify.configure(config);

const StackRouter = () => {

 const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () =>{
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true});
      if(!userInfo){
        return;
      }
      try{
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
        if(userData){
          setUser(userData.data.getUser);
        }
      }catch (e){
        console.log(e)
      }
      fetchUser();
    }
  }, [])
  const logOut = () => {
    Auth.signOut();
  }
  const headerScreen = {
    
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <Text style={styles.logo}>Be pleasured by Pinky</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.logoimg} source={require('../img/logopinky.png')} />
          </View>
        </View>
      ),
      headerLeft: () => null,
      headerRight: () => (
        <View>
          <View style={styles.buttonContainer}>
            <View>
              <ProfilePicture  size={25} image={user?.image} />
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={logOut} >
                <AntDesign style={styles.logoutIcon} name="logout" size={18} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      ),
     }


  const [searchValue, setSearchValue] = useState('')
  return(
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={headerScreen}
      >
        <Stack.Screen name="bottomTabNavigator" component={BottomTabNavigator}/>
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen name="ProductScreen" component={Product} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
     </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  headerTitle: {
    paddingTop: 5
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
  },
  logo: {
    color: 'black',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  logoimg: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  search: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  searchIcon: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'pink'
  },
  logoutIcon: {
    marginLeft: 30,
    padding: 5,
    backgroundColor: 'pink'
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
buttonContainer: {
  paddingTop: 15,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexDirection: 'row'
}
});
export default StackRouter