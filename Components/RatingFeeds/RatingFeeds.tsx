import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome, AntDesign } from '@expo/vector-icons';

const product = {
    love: 100,
    loveCount: 500
}

export default function componentName() {
  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.post}>"I am ratings We up"</Text>
            <Text style={styles.name}> -Yonela Johannes</Text>
            <View style={{marginBottom: 10, flexDirection: 'row', backgroundColor: '#f1f1f1', padding: 5, borderRadius: 5}}>
                        {[0,0,0,0,0].map((el, i) =>
                            <AntDesign
                            key={`${product.id}-${i}`}
                            name={i < Math.floor(product.love) ? 'heart': 'hearto'}
                            size={12}
                            color="pink"
                            />
                            )
                        }
                        <Text style={styles.loveCount}>{product.loveCount}</Text>                        
                    </View>
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
    loveCount :{
        color: 'pink',
        fontSize: 10,
        paddingLeft: 5,
        fontWeight: 'bold',
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

