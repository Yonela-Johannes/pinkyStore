import React, {useState, useEffect} from 'react'
import { DataStore } from 'aws-amplify'
import { Product } from '../../src/models'
import {View, Text, Image, Pressable, LogBox} from 'react-native'
import {FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'


// LogBox.ignoreLogs(['Setting a timer']);

interface CategoriesProps {
    product: {
        id: string,
        name: string,
        image: string,
        price: number,
        rating: number,
        love: number,
        loveCount: number,
        description: string,
        avgRating: number,
        oldPrice?: number,
    }
}
function Slider({product}: CategoriesProps) {

    const [Products , setProducts] = useState<Product[]>([]);
    const navigation = useNavigation();
    const onPress = () =>{
        navigation.navigate('ProductScreen', {id: product.id});
    }
    useEffect(() => {
        DataStore.query(Product).then(setProducts)
    }, [])
    return (
        <Pressable onPress={onPress} style={styles.slider}>
            <View style={styles.mainContentContainer}>
            <Text style={styles.name}>{product.name}</Text>
                <View style={styles.wrapper}>
                    <View style={styles.content}>
                            <View style={styles.contentDetails}>
                                <Image style={styles.image} source={{uri: product.image}} />
                                <View>
                                    <Text style={styles.contentDescription} numberOfLines={3}>{product.description}</Text>
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
                                        <Text style={{fontSize: 10, paddingRight:2, fontWeight: 'bold', color: 'gray', textDecorationLine: 'line-through'}}>R</Text>
                                        <Text style={styles.oldPrice}>{product.oldPrice?.toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.costContainer}>
                                        <Text style={{fontSize: 10, padding: 5, fontWeight: 'bold'}}>R</Text>
                                        <Text style={styles.contentCost}>{product.price.toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>
                    </View>

                </View>
            </View>
        </Pressable>
    )
}

export default Slider
