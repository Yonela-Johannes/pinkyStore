import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Button from '../Components/Button/Button'
import { DataStore, Auth } from 'aws-amplify';
import {Order, OrderProduct, CartProduct} from '../src/models'


export default function AddressScreen({navigation}) {
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [apartment, setApartment] = useState('')
    const [city, setCity] = useState('')

    const [phoneError, setPhoneError] = useState('')
    // const [zipError, zipError] = useState('')

    const validatePhone = () =>{
        if (phone.length < 9){
            setPhoneError('Phone number too short')
        }else if(phone.length > 10){
            setPhoneError('Phone number exceeded limit')
        };
    }

    // const saveOrder = async () => {
    //     const userData = await Auth.currentAuthenticatedUser();
    //     const newOrder = await DataStore.save(
    //         new Order({
    //             userSub: userData.attributes.sub,
    //             fullname: fullname,
    //             phoneNumber: phone,
    //             city,
    //             address,
    //         })
    //     )
    //     const cartItems = await DataStore.query(CartProduct, cp => 
    //         cp.userSub('eq', userData.attributes.sub),
    
    //     );
    //     await Promise.all(
    //         cartItems.map(cartItem => DataStore.save(new OrderProduct({
    //             quantity: cartItem.quantity,
    //             option: cartItem.option,
    //             productID: cartItem.productID,
    //             orderID: newOrder.id,
    //         })))
    //     )
    //     await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));
    //  };
    console.log("before button click")
    const checkOut = () => {
        console.log("Before nav")
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
        else{
            navigation.navigate('Blog')
             console.log('After Navigation')
        }
            return;
    }


    

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>         
        <ScrollView style={styles.root}>
        <View>
            <Text>South Africa</Text>
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
            {/* {!!error && <Text style={styles.error}>{error}</Text>} */}
        </View>
        <View>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} value={city} onChangeText={setCity} />
        </View>
        {/* <View>
            <Text style={styles.label}>ZIP Code</Text>
            <TextInput keyboardType={'phone-pad'} style={styles.input} value={zip} onChangeText={(text) => setZip(text)} />
            {!!error && <Text style={styles.error}>{error}</Text>}
        </View> */}
        <View>
            <Text style={styles.delivery}>Delivery takes up to 2 weeks.</Text>
        </View>
        <TouchableOpacity>
            <Button text={'Checkout'} onPress={checkOut} />
        </TouchableOpacity>
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