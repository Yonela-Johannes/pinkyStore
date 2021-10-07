// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Product, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  User,
  Post,
  Product,
  CartProduct,
  OrderProduct,
  Order
};