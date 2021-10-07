import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome, AntDesign } from '@expo/vector-icons';


export default function RatingFeeds({post}) {
    console.log(post)

  return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.post}>{post.content}</Text>
            <Text style={styles.name}>{!post.name ? 'Visitor': post.name}</Text>
            <View style={{marginBottom: 10, flexDirection: 'row', backgroundColor: '#f1f1f1', padding: 5, borderRadius: 5}}>
                        {[0,0,0,0,0].map((el, i) =>
                            <AntDesign
                            key={`${post.id}-${i}`}
                            name={i < Math.floor(post.avgRating) ? 'heart': 'hearto'}
                            size={12}
                            color="#fc6185"
                            />
                            )
                        }
                        <Text style={styles.loveCount}>{post.rating}</Text>                        
                    </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#feaabe'
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
        color: 'gray',
        fontSize: 10,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    post:{
        color: '#f4436d',
        fontSize: 13,
        lineHeight: 18,
        fontWeight: 'bold',
    },
    name: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center',
    }
})

