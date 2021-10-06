import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Image, TouchableHighlight} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import QuantitySelector from '../QuantitySelecctor/QuantitySelector'
import styles from './styles'
import { CartProduct } from '../../src/models';


interface CartProductItemsProps {
    cartItems: CartProduct;
}
function ShoppingCartItems({cartItem}: CartProductItemsProps) {
    console.log("I am here.", cartItem)
    const {product, ...cartProduct} = cartItem;


    const updateQuantity = async (newQuantity: number) => {
        const original = await DataStore.query(CartProduct, cartProduct.id);
        await DataStore.save(
            CartProduct.CopyOf(original, updated => {
                updated.quatity = newQuantity;
            })
        )
    }
    return (
        <View style={styles.slider}>
            <View style={styles.mainContentContainer}>
                <View style={styles.wrapper}>
                    <View style={styles.content}>
                            <View style={styles.contentDetails}>
                                <Image style={styles.image} source={{uri: product.image}} />
                                <View>
                                    <Text style={styles.name}>{product.name}</Text>
                                    <Text style={styles.contentDescription} numberOfLines={4}>{product.description}</Text>
                                    <View style={styles.starContainer}>
                                        {[0,0,0,0,0].map((el, i) =>
                                            <FontAwesome
                                            key={`${product.id}-${i}`}
                                            name={i < Math.floor(product.avgRating) ? 'star': 'star-o'}
                                            size={15}
                                            color="pink"
                                            />
                                            )
                                        }
                                        <Text style={styles.rating}>{product.rating}</Text>
                                    </View>
                                    <View style={styles.oldPriceContainer}>
                                        <Text style={{fontSize: 9, paddingRight:2, fontWeight: 'bold', color: 'gray'}}>WAS</Text>
                                        <Text style={{fontSize: 9, paddingRight:2, fontWeight: 'bold', color: 'gray', textDecorationLine: 'line-through'}}>R</Text>
                                        <Text style={styles.oldPrice}>{product.oldPrice?.toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.costContainer}>
                                        <Text style={{fontSize: 10, fontWeight: 'bold'}}>NOW</Text>
                                        <Text style={{fontSize: 10, padding: 5, fontWeight: 'bold'}}>R</Text>
                                        <Text style={styles.contentCost}>{product.price.toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>
                    </View>
                    <QuantitySelector quantity={cartProduct.quantity} setQuantity={updateQuantity} />
                </View>
            </View>
        </View>
    )
}

export default ShoppingCartItems
