import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import Button from '../Components/Button/Button'
export default function SignupScreen({navigation}) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        navigation.navigate('Login')
    }
    const signUp = async () => {
        if(!username)
            Alert.alert('Please fill in your username') 
        else{
            try{
                const { user } = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email,
                    }
                });
                console.log("succesfull Signed up")
                console.log(user)
                navigation.navigate('Authentication')
            } catch(error) {
                console.log('error signin up', error)
                Alert.alert("OOP!", "User already exist", [{text: "Understood"}, navigation.navigate('AuthenticationTwo')])
            }

        }
        return;
    }
  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
            <ScrollView style={styles.root}>
            <View>
                <Text style={styles.label}>User Name</Text>
                <TextInput style={styles.input} placeholder={'User name'} value={username} onChangeText={setUsername} />

            </View>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder={'janedoe@gmail.com'} value={email} onChangeText={setEmail} />

            </View>
            <View>
            <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder={"password"} textContentType="password" autoCapitalize='none' secureTextEntry value={password} onChangeText={setPassword} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Button text={'Register'} onPress={signUp} containerStyles={{backgroundColor: 'white'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Button text={'Sign in'} onPress={login} />
                </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.label}></Text>            
            </View>
        </ScrollView>
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white'

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
    buttonContainer: {
       paddingTop: 20,
       alignSelf: 'center',
    }
})