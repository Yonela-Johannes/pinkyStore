import React, { useState,useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { categories } from '../../data/categories'
import Slider from './Slider'
import { DataStore } from 'aws-amplify'
import { Product } from '../../src/models'


export default function componentName() {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
      DataStore.query(Product).then((setProducts));
  }, [])
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Slider product={item} /> }
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
     </View>
  );
}
