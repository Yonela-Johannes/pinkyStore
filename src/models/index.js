// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Question, Rating, Product, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  User,
  Post,
  Question,
  Rating,
  Product,
  CartProduct,
  OrderProduct,
  Order
};