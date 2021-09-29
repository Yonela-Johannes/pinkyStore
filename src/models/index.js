// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Like, Product, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  User,
  Post,
  Like,
  Product,
  CartProduct,
  OrderProduct,
  Order
};