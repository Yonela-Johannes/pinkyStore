import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly image?: string;
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly content: string;
  readonly image?: string;
  readonly user?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[];
  readonly avgRating?: number;
  readonly rating?: number;
  readonly price: number;
  readonly oldPrice?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly productID: string;
  readonly product?: Product;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CartProduct, CartProductMetaData>);
  static copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct, CartProductMetaData>) => MutableModel<CartProduct, CartProductMetaData> | void): CartProduct;
}

export declare class OrderProduct {
  readonly id: string;
  readonly productID: string;
  readonly product?: Product;
  readonly quantity: number;
  readonly orderID: string;
  readonly order?: Order;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderProduct, OrderProductMetaData>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

export declare class Order {
  readonly id: string;
  readonly userSub: string;
  readonly fullname: string;
  readonly phoneNumber?: string;
  readonly city?: string;
  readonly address?: string;
  readonly zipCode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}