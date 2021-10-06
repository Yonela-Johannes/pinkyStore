import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Button from '../Components/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function GetPassword({navigation}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [code, setCode] = useState('')
    const [authenticationCode, setAuthenticationCode] = useState('')

    // Send confirmation code to user's email
    // Auth.forgotPassword(username)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    
    // // Collect confirmation code and new password, then
    // Auth.forgotPasswordSubmit(username, code, new_password)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));


    // Auth.signIn(username, password)

    // .then(user => {
    //     if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
    //         const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
    //         Auth.completeNewPassword(
    //             user,               // the Cognito User Object
    //             newPassword,       // the new password
    //             // OPTIONAL, the required attributes
    //             {
    //             email: 'xxxx@example.com',
    //             }
    //         ).then(user => {
    //             // at this time the user is logged in if no MFA required
    //             console.log(user);
    //         }).catch(e => {
    //         console.log(e);
    //         });
    //     } else {

    //     }
    // }).catch(e => {
    //     console.log(e);
    // });


    const getPass = async () => {
        try{
            const { user } = await Auth.confirmSignUp(username, authenticationCode)
            console.log("User succesfully sign up")
            console.log(user)
        } catch(error) {
            console.log('error signin up', error)
        }
    }

  return (
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
            <ScrollView style={styles.root}>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.input} placeholder={'Jane'} value={username} onChangeText={setUsername} />
                    </View>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder={'janedoe@gmail.com'} value={email} onChangeText={setEmail} />
                    </View>
                    <View>
                        <Text style={styles.label}>New Password</Text>
                        <TextInput style={styles.input} placeholder={"New secret Password"} textContentType="password" autoCapitalize='none' secureTextEntry value={new_password} onChangeText={setNewPassword} />
                    </View>
                    {/* <View>
                        <Text style={styles.label}>New Password</Text>
                        <TextInput style={styles.input} placeholder={"Retype secret Password"} textContentType="password" autoCapitalize='none' secureTextEntry value={authenticationCode} onChangeText={setAuthenticationCode} />
                    </View> */}
                </View>
                <View style={styles.buttons} >
                    <View style={styles.buttonsContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 8}}>
                            <Text style={{color: 'gray'}}>please keep your password save.</Text>
                        </View>
                        <TouchableOpacity>
                            <Button text={'Change Password'} onPress={getPass} />
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