import React,{ useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import  products  from '../../data/cart';
import { DataStore, Auth } from 'aws-amplify';
import { Product, CartProduct } from '../../src/models';
import AddressScreen from '../../Screens/AddressScreen';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button/Button';
import ShoppingCartItems from './ShoppingCartItems';

export default function ShoppingCartComponent() {
  const [loading, setLoading] = useState(false)
  const [cartProducts, setCartProducts ] = useState<CartProduct[]>([])

  useEffect(() => {

    const fetchCartProducts = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      DataStore.query(CartProduct, cp => cp.quantity('gt', 0)).then(
      setCartProducts
      );
    };
    fetchCartProducts();
  }, [])

  useEffect(() => {
    if(cartProducts.filter(cp => !cp.product).length === 0){
      setLoading(false)
      return;
    }
    const fetchProducts = async () => {
      setLoading(true)
      const products = await Promise.all(
        cartProducts.map(cartProduct => 
        DataStore.query(Product, cartProduct.productID),
          ),
        );
        setCartProducts(currentCartProducts =>
           cartProducts.map(cartProduct => ({
          ...cartProduct,
           product: products.find(p => p.id === cartProduct.productID),
        }))
        );
      };
      fetchProducts();
  }, [cartProducts])

    useEffect(() => {
      const subscriptions = cartProducts.map(cp => 
       DataStore.observe(CartProduct, cp.id).subscribe(msg => {
         if(msg.opType === 'UPDATE'){
           setCartProducts(curCartProducts => curCartProducts.map(cp => {
             if(cp.id !== msg.element.id){
               return cp;
             }
             return {
               ...cp,
               ...msg.element,
             }
           }))
         }
      }),
    );
      return () => {
        subscriptions.forEach(sub => sub.unsubscribe());
      }
    }, [cartProducts])

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
     summedPrice + (product?.product?.price || 0) * product.quantity, 0);
  const navigation = useNavigation();
  const onPress = () => {
      navigation.navigate('AddressScreen')
  }
  if (cartProducts.filter(cp => !cp.product).length !== 0){
    return <ActivityIndicator />
  }
  return (
    <View style={{backgroundColor: 'white'}}>      
      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <ShoppingCartItems cartItem={item} /> }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
              <View style={{flexDirection: 'column', paddingVertical: 10, paddingHorizontal: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Text style={{color: 'gray', fontWeight: 'bold', paddingHorizontal: 10, fontSize: 12}}>Total Items:</Text>
                  <Text style={{color: '#ff8e8e', fontWeight: 'bold'}}>{cartProducts.length}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Text style={{color: 'gray', fontWeight: 'bold', paddingHorizontal: 10, fontSize: 12}}>Subtotal:</Text>
                  <Text style={{color: '#ff8e8e', fontWeight: 'bold'}}>R {totalPrice.toFixed(2)}</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <Button onPress={onPress} text={'Proceed to Checkout'} containerStyles={{backgroundColor: '#fee3e8', color: 'white'}}/>
            </View>
          </View>

        )}
      />
     </View>
  );
}
