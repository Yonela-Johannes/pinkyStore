import React, {useState, useEffect} from 'react';
import VerificationScreen from './Screens/VerificationScreen';
import Amplify from 'aws-amplify';
import config from './src/aws-exports'
import StackRouter from './Navigation/StackRouter'
import StackNavigator from './SignIn/StackNavigator';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config);

const App = () => {
  return(
    // <VerificationScreen />
    // <StackRouter />
      <StackNavigator />
  )
}
const styles = StyleSheet.create({

});
// export default withAuthenticator(App)
export default App