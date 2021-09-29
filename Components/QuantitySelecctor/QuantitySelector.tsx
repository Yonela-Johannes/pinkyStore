import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function QuantitySelector({quantity, setQuantity}) {

    const increase = () => {
        setQuantity(quantity + 1)
    }
    const decrease = () => {
       setQuantity(Math.max(0,quantity - 1))
    }

  return (
    <View style={{padding: 10, justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
        <Pressable onPress={decrease}>
            <MaterialIcons name="delete-forever" size={22} color="red" />      
        </Pressable>
        <Text style={{fontSize: 16, paddingVertical: 5,paddingHorizontal: 20, borderWidth: 1, marginHorizontal: 10, borderColor: 'pink', borderRadius: 50,}}>{quantity}</Text>
        <Pressable onPress={increase}>
            <FontAwesome name="shopping-bag" size={18} color="#ff8989" />
        </Pressable>
     </View>
  );
}
