import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';


export default function ImageCarousel({ images }: {images: string[]}) {
    const windowWidth = useWindowDimensions().width;

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
            <Image style={[styles.image, {width: windowWidth - 40}]} source={{uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
     </View>
  );
}

const styles = StyleSheet.create({
    root: {
      borderWidth: 1,
      borderColor: 'pink',
        borderRadius: 15,
        backgroundColor: 'white',
    },
    image: {
        borderRadius: 5,
        height: 200,
        resizeMode: 'contain',
        margin: 10
    }
})
