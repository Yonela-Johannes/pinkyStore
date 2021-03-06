import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity} from 'react-native';
import Button from '../Components/Button/Button'
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

Auth.currentAuthenticatedUser({
    bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => console.log(err));

export default function LoginScreen({navigation}) {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const signIn = async () => {
        if(!username)
            Alert.alert('Please fill in your user email')
        else if(!password)
            Alert.alert('Please fill in your password') 
            else{
                try{
                    const { user } = await Auth.signIn({
                        username,
                        password,
                    });
                    navigation.replace('MainScreen')
                } catch(error) {
                    console.log('error signin up', error)
                    Alert.alert('OOPS!', 'Incorrect password or email address', [{text: 'Understood'}])
                    Auth.currentAuthenticatedUser ? navigation.replace('Signup') : navigation.replace('MainScren')
                }
            }
        }
        const validatePhone = () =>{
            if (username.length < 3){
                setUsernameError('Email too short')
            }else if(!username){
                setUsernameError('Enter your email address')
            }
            else if(password.length < 8){
                setPasswordError('You password should be 8 characters or more!')
            };
        }
        const register = () => {
            navigation.navigate('Signup')
        }
        const getPassword = () => {
            navigation.navigate('GetPassword')
        }

  return (
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
            <ScrollView style={styles.root}>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.input} onEndEditing={validatePhone} placeholder={'jane'} value={username} onChangeText={text => {setUsername(text); setUsernameError('')}} />
                        {!!usernameError && <Text style={styles.error}>{usernameError}</Text>}                
                    </View>
                    <View>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} onEndEditing={validatePhone} placeholder={"password"} textContentType="password" autoCapitalize='none' secureTextEntry value={password} onChangeText={text => {setPassword(text); setPasswordError('')}} />
                        {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}   
                    </View>
                </View>
                <View style={styles.buttons} >
                    <View style={styles.buttonsContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 8}}>
                            <Text style={{color: 'gray'}}>forgot password?</Text>
                            <View>
                                <Text onPress={getPassword} style={{borderRadius: 5, borderWidth: 1, marginHorizontal: 8, borderColor: 'pink', color: 'purple', fontSize: 12, paddingHorizontal: 10, paddingVertical: 5}}>Get Password</Text>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Button text={'Sign in'} onPress={signIn} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{color: 'gray', paddingBottom: 8 }}>Register if you do not have an account.</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Button text={'Register'} onPress={register} containerStyles={{backgroundColor: 'white'}} />
                        </TouchableOpacity>
                    </View>
                </View>
        </ScrollView>
     </KeyboardAvoidingView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        height: "100%",
    },
    inputContainer: {
        flexDirection: 'column',
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 3,
        paddingLeft: 5
    },
    error: {
        fontSize: 12,
        paddingBottom: 3,
        paddingLeft: 5,
        color: 'red'
    },
    input: {
        backgroundColor: 'white',
        padding: 3,
        borderWidth: 1,
        marginVertical: 5,
        borderColor: 'pink',
        borderRadius: 5,
        height: 40
    },
    delivery: {
        color: 'gray',
        padding: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    buttons: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonsContainer: {
        justifyContent: 'center',
        // flexDirection: 'row',
        // width: 300
    },
    button:{
        padding: 10,
    },
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
        padding: 8,
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
    }
})