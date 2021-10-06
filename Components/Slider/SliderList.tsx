import React, { useState,useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Slider from './Slider'
import { DataStore } from 'aws-amplify'
import { Product } from '../../src/models'


export default function componentName() {
  // const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    // setLoading(true)
      DataStore.query(Product).then((setProducts));
    // setLoading(false)
  }, [])
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Slider product={item} /> }
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        // refreshing={loading}
      />
     </View>
  );
}
