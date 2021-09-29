import React,{useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../QuantitySelecctor/QuantitySelector'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, UseNavigation, useNavigation } from '@react-navigation/native'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Button from '../Button/Button'
import styles from './styles'
import { DataStore, Auth } from 'aws-amplify'
import { Product, CartProduct } from '../../src/models'


export default function Products() {
  const navigation = useNavigation();
  const [product, setProduct] = useState<Product | undefined>(undefined)

    const route = useRoute();

    const item = route.params
     const  [selectedOption, setSelectedOption] = useState<string | undefined>(undefined)
    const [quantity, setQuantity] = useState(1)


    const onAddToBag = async () =>{
      const userData = await Auth.currentAuthenticatedUser();

      if(!product || !userData){
        return;
      }
      console.log(userData)
      const newCartProduct = new CartProduct({
        userSub: userData.attributes.sub,
        quantity,
        option: selectedOption || null,
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

    useEffect(() => {
      if(product?.options){
        setSelectedOption(product.options[0])
        return;
      }
  }, [product])



    if(!product){
      return<ActivityIndicator />;
    }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description} numberOfLines={5}>{product.description}</Text>
        <ImageCarousel  images={product.images}/>
      <View style={{borderBottomWidth: 1, borderColor: '#f9dbdb'}}>
        <View style={{alignItems: 'center', paddingTop: 10,}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Color</Text>
        </View>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                setSelectedOption(itemValue)
            }>
                {product.options.map(option => (
            <Picker.Item label={option} value={option} />
            ))}
            </Picker>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.oldPrice}>R {product.oldPrice.toFixed()}</Text>
            <Text style={styles.price}>R {product.price.toFixed(2)}</Text>
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
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 11, fontWeight: 'bold', color: 'gray'}}>Quantity</Text>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                </View>
        </View>
      </View>
        <Button containerStyles={{backgroundColor: 'white'}}  onPress={onAddToBag} text="Add to Bag" />
        {/* <Button onPress={onPress} text="Buy Now" /> */}
     </ScrollView>
  );
}
