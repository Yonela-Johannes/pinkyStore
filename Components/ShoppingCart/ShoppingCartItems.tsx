import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Image, TouchableHighlight} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import QuantitySelector from '../QuantitySelecctor/QuantitySelector'
import styles from './styles'


interface CartProductItemsProps {
    cartItem: {
        id: string;
        quantity: number;
        options?: string[];
        product : {
            id: string;
            name: string;
            image: string;
            price: number;
            rating: number;
            love: number;
            loveCount: number;
            description: string;
            avgRating: number;
            oldPrice?: number;
            averageRate: number;
            images: string[];
            options?: string[];
        },

    }
}
function ShoppingCartItems({cartItem}: CartProductItemsProps) {
    console.log("I am here.", cartItem)
    const {quantity: quantityProp, product} = cartItem
    const [quantity, setQuantity] = useState(quantityProp)

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
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </View>
            </View>
        </View>
    )
}

export default ShoppingCartItems
