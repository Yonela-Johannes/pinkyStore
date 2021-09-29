import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import countryList from 'country-list'
import { Auth } from 'aws-amplify';
import Button from '../Components/Button/Button'
const countries = countryList.getData();


export default function SignupScreen({navigation}) {
    const [country, setCountry] = useState(countries[246].code)
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [apartment, setApartment] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [password, setPassword] = useState('')
    
    const [error, setError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    // const signUp = async () => {
    //     try{
    //         const { user } = await Auth.signUp({
    //             username,
    //             password,
    //             attributes: {
    //                 email,
    //                 phone_number,
    //             }
    //         });
    //         console.log(user)

    //     } catch(error) {
    //         console.log('error signin up', error)
    //     }
    // }
    const validatePhone = () =>{
        if (phone.length < 9){
            setPhoneError('Phone number too short')
        }else if(phone.length > 9){
            setPhoneError('Phone number exceeded limit')
        };
    }

    const onPress = () => {

        if(!fullname)
            Alert.alert('Please fill in your fullname')
        else if(!phone)
            Alert.alert('Please fill in your phone number')     
        else if(!address)
            Alert.alert('Please fill in your address')
        else if(!city)
            Alert.alert('Please fill in your city')
        else if(!zip)
            Alert.alert('Please fill in your ZIP code')
        return;
    }
    const login = () => {
        navigation.navigate('Login')
        console.log(navigation)
        console.warn('You have clicked me')
    }
  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
            <ScrollView style={styles.root}>
            <View>
                <Text style={styles.label}>Fullname (Name & Surname)</Text>
                <TextInput style={styles.input} placeholder={'Full name'} value={fullname} onChangeText={setFullname} />

            </View>
            <View>
                <Text style={styles.label}>User Name</Text>
                <TextInput style={styles.input} placeholder={'User name'} value={fullname} onChangeText={setFullname} />

            </View>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder={'janedoe@gmail.com'} value={fullname} onChangeText={setFullname} />

            </View>
            <View>
                <Text style={styles.label}>Phone number</Text>
                <TextInput keyboardType={'phone-pad'} style={styles.input} onEndEditing={validatePhone} placeholder={'Cellphone'} value={phone} onChangeText={text => {setPhone(text); setPhoneError('')}} />
                {!!phoneError && <Text style={styles.error}>{phoneError}</Text>}
            </View>
            <View>
            <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder={"password"} textContentType="password" autoCapitalize='none' secureTextEntry value={password} onChangeText={setPassword} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Button text={'Register'} onPress={onPress} containerStyles={{backgroundColor: 'white'}} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Button text={'Sign in'} onPress={login} />
                </TouchableOpacity>
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