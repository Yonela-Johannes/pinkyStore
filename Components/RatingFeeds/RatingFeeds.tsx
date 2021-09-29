import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function componentName() {
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.post}>"I am ratings We up"</Text>
            <Text style={styles.name}> -Yonela Johannes</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.post}>"I am ratings We up"</Text>
            <Text style={styles.name}> -Yonela Johannes</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10

    },
    post:{

    },
    name: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center',
    }
})

