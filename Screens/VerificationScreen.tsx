import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Button from '../Components/Button/Button'
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function VerificationScreen({navigation}) {
    const [username, setUsername] = useState('')
    const [code, setCode] = useState('')

      
        const register = async () => {
            try{
                const { user } = await Auth.confirmSignUp(username, code)
                navigation.navigate('Login')                
            }catch (e) {
                console.log("Error confirming signup", e)
            }
        }
        
    const onPress = () => {

        }
        const resendCode = async () => {
            try{
                await Auth.resendSignUp(username)
                console.log("code resent successfully")
            }catch(error) {
                console.log("Error resend code", error)
            }
        }

  return (
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
            <ScrollView style={styles.root}>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder={'janedoe@gmail.com'} value={username} onChangeText={setUsername} />
                    </View>
                    <View>
                        <Text style={styles.label}>Verification code</Text>
                        <TextInput style={styles.input} placeholder={"Authentication code"} autoCapitalize='none' secureTextEntry value={code} onChangeText={setCode} />
                    </View>
                </View>
                <View style={styles.buttons} >
                    <View style={styles.buttonsContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 8}}>
                            <Text style={{color: 'gray'}}>Check your email for code.</Text>
                            <View>
                                {/* <Text style={{color: 'purple', fontSize: 12, paddingHorizontal: 10}}>Get Password</Text> */}
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Button text={'confirm sign Up'} onPress={register} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{color: 'gray', paddingBottom: 8 }}>Register if you do not have an account.</Text>
                        </View>
                        <TouchableOpacity>
                            <Button text={'Send again'} onPress={resendCode} containerStyles={{backgroundColor: 'white'}} />
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