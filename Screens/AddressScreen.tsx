import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import countryList from 'country-list'
import Button from '../Components/Button/Button'
const countries = countryList.getData();



export default function AddressScreen() {
    const [country, setCountry] = useState(countries[246].code)
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [apartment, setApartment] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    
    const [error, setError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    // const [zipError, zipError] = useState('')

    const validatePhone = () =>{
        if (phone.length < 9){
            setPhoneError('Phone number too short')
        }else if(phone.length > 9){
            setPhoneError('Phone number exceeded limit')
        };
    }
    const validateZip = () =>{
        if (zip.length < 3){
            zipError('ZIP code must be 4 digits')
        }else{
            zipError('ZIP code must be 4 digits')
        };
    }
    const validateAddress = () => {
        if (zip.length < 3){
            addressError('ZIP code must be 4 digits')
        }else{
            addressError('ZIP code must be 4 digits')
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

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
        <ScrollView style={styles.root}>
        <View>
            <Picker selectedValue={country} onValueChange={setCountry}>
                {countries.map(country => (
                    <Picker.Item value={country.code} label={country.name}/>
                ))}
            </Picker>
        </View>
        <View>
            <Text style={styles.label}>Fullname (Name & Surname)</Text>
            <TextInput style={styles.input} placeholder={'Full name'} value={fullname} onChangeText={setFullname} />

        </View>
        <View>
            <Text style={styles.label}>Phone number</Text>
            <TextInput keyboardType={'phone-pad'} style={styles.input} onEndEditing={validatePhone} placeholder={'Cellphone'} value={phone} onChangeText={text => {setPhone(text); setPhoneError('')}} />
            {!!phoneError && <Text style={styles.error}>{phoneError}</Text>}
        </View>
        <View>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} placeholder={'Street address or P.O Box'} value={address} onChangeText={setAddress} />
            <TextInput style={styles.input} placeholder={'Apartment, Unit...(Optional)'} value={apartment} onChangeText={setApartment} />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        <View>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} value={city} onChangeText={setCity} />
        </View>
        <View>
            <Text style={styles.label}>ZIP Code</Text>
            <TextInput keyboardType={'phone-pad'} style={styles.input} value={zip} onChangeText={(text) => setZip(text)} />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        <View>
            <Text style={styles.delivery}>Delivery takes up to 2 weeks.</Text>
        </View>
        <View>
            <Button text={'Checkout'} onPress={onPress} />
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
})