import React,{useState, useEffect} from 'react';
import QuantitySelector from '../QuantitySelecctor/QuantitySelector'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { FontAwesome } from '@expo/vector-icons';
import Button from '../Button/Button'
import styles from './styles'
import { DataStore, Auth } from 'aws-amplify'
import { Product, CartProduct } from '../../src/models'


export default function Products() {
  const navigation = useNavigation();
  const [product, setProduct] = useState<Product | undefined>(undefined)

    const route = useRoute();

    const item = route.params
    const [quantity, setQuantity] = useState(1)

    const onAddToBag = async () =>{
      const userData = await Auth.currentAuthenticatedUser();

      if(!product || !userData){
        return;
      }
      const newCartProduct = new CartProduct({
        userSub: userData.attributes.sub,
        quantity,
        productID: product.id,
      });
      await DataStore.save(newCartProduct)
      navigation.navigate('ShoppingCart')
    }

    useEffect(() => {
      if(!route.params?.id){
        return;
      }
      DataStore.query(Product, route.params.id).then((setProduct));
  }, [!route.params?.id])


    if(!product){
      return<ActivityIndicator />;
    }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description} numberOfLines={5}>{product.description}</Text>
        <ImageCarousel  images={product.images}/>
      <View style={{borderBottomWidth: 1, borderColor: '#f9dbdb'}}>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.oldPrice}> WAS R{product.oldPrice.toFixed()}</Text>
            <Text style={styles.price}>NOW R{product.price.toFixed(2)}</Text>
            <View>
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
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </View>
        </View>
      </View>
        <Button  onPress={onAddToBag} text="Add to Bag" />
     </ScrollView>
  );
}
