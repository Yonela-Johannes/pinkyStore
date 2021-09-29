import React from 'react';
import { View, Text,Pressable, StyleSheet } from 'react-native';

interface ButtonProps{
    text: string;
    onPress: () => {};
    containerStyles?: object;
}

export default function Button({text, onPress, containerStyles }: ButtonProps) {
  return (
    <View style={[styles.button, containerStyles]}>
        <Pressable style={{justifyContent: 'center'}} onPress={onPress}>
            <Text style={styles.basket}>{text}</Text>
        </Pressable>
     </View>
  );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#ff8989',
        borderRadius: 5,
        backgroundColor: 'pink',
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    basket: {
        color: 'black',
    },
})
