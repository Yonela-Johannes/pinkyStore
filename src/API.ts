/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  image?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  name: string,
  email: string,
  image?: string | null,
  posts?: ModelPostConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  image?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  postID: string,
  user: User,
  post: Post,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  userID: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
  _version?: number | null,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
  _version?: number | null,
};

export type DeleteLikeInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string > | null,
  avgRating?: number | null,
  rating?: number | null,
  price: number,
  oldPrice?: number | null,
  love?: number | null,
  loveCount?: number | null,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  love?: ModelFloatInput | null,
  loveCount?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string > | null,
  avgRating?: number | null,
  rating?: number | null,
  price: number,
  oldPrice?: number | null,
  love?: number | null,
  loveCount?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  options?: Array< string > | null,
  avgRating?: number | null,
  rating?: number | null,
  price?: number | null,
  oldPrice?: number | null,
  love?: number | null,
  loveCount?: number | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartProductInput = {
  id?: string | null,
  userSub: string,
  quantity: number,
  option?: string | null,
  productID: string,
  _version?: number | null,
};

export type ModelCartProductConditionInput = {
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductConditionInput | null > | null,
  or?: Array< ModelCartProductConditionInput | null > | null,
  not?: ModelCartProductConditionInput | null,
};

export type CartProduct = {
  __typename: "CartProduct",
  id: string,
  userSub: string,
  quantity: number,
  option?: string | null,
  productID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  product?: Product | null,
};

export type UpdateCartProductInput = {
  id: string,
  userSub?: string | null,
  quantity?: number | null,
  option?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteCartProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderProductInput = {
  id?: string | null,
  productID: string,
  quantity: number,
  option?: string | null,
  orderID: string,
  _version?: number | null,
};

export type ModelOrderProductConditionInput = {
  productID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderProductConditionInput | null > | null,
  or?: Array< ModelOrderProductConditionInput | null > | null,
  not?: ModelOrderProductConditionInput | null,
};

export type OrderProduct = {
  __typename: "OrderProduct",
  id: string,
  productID: string,
  quantity: number,
  option?: string | null,
  orderID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  product?: Product | null,
  order?: Order | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userSub: string,
  fullname: string,
  phoneNumber?: string | null,
  city?: string | null,
  address?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderProductInput = {
  id: string,
  productID?: string | null,
  quantity?: number | null,
  option?: string | null,
  orderID?: string | null,
  _version?: number | null,
};

export type DeleteOrderProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  userSub: string,
  fullname: string,
  phoneNumber?: string | null,
  city?: string | null,
  address?: string | null,
  _version?: number | null,
};

export type ModelOrderConditionInput = {
  userSub?: ModelStringInput | null,
  fullname?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  userSub?: string | null,
  fullname?: string | null,
  phoneNumber?: string | null,
  city?: string | null,
  address?: string | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRating?: ModelFloatInput | null,
  rating?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  oldPrice?: ModelFloatInput | null,
  love?: ModelFloatInput | null,
  loveCount?: ModelIntInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartProductFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductFilterInput | null > | null,
  or?: Array< ModelCartProductFilterInput | null > | null,
  not?: ModelCartProductFilterInput | null,
};

export type ModelCartProductConnection = {
  __typename: "ModelCartProductConnection",
  items?:  Array<CartProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderProductFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderProductFilterInput | null > | null,
  or?: Array< ModelOrderProductFilterInput | null > | null,
  not?: ModelOrderProductFilterInput | null,
};

export type ModelOrderProductConnection = {
  __typename: "ModelOrderProductConnection",
  items?:  Array<OrderProduct | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  fullname?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input: CreateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type CreateCartProductMutation = {
  createCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input: UpdateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type UpdateCartProductMutation = {
  updateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input: DeleteCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type DeleteCartProductMutation = {
  deleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateOrderProductMutationVariables = {
  input: CreateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type CreateOrderProductMutation = {
  createOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateOrderProductMutationVariables = {
  input: UpdateOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type UpdateOrderProductMutation = {
  updateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteOrderProductMutationVariables = {
  input: DeleteOrderProductInput,
  condition?: ModelOrderProductConditionInput | null,
};

export type DeleteOrderProductMutation = {
  deleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLikesQuery = {
  syncLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id: string,
};

export type GetCartProductQuery = {
  getCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      userSub: string,
      quantity: number,
      option?: string | null,
      productID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        rating?: number | null,
        price: number,
        oldPrice?: number | null,
        love?: number | null,
        loveCount?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartProductsQuery = {
  syncCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      userSub: string,
      quantity: number,
      option?: string | null,
      productID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        rating?: number | null,
        price: number,
        oldPrice?: number | null,
        love?: number | null,
        loveCount?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderProductQueryVariables = {
  id: string,
};

export type GetOrderProductQuery = {
  getOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderProductsQuery = {
  listOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      productID: string,
      quantity: number,
      option?: string | null,
      orderID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        rating?: number | null,
        price: number,
        oldPrice?: number | null,
        love?: number | null,
        loveCount?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        fullname: string,
        phoneNumber?: string | null,
        city?: string | null,
        address?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderProductsQueryVariables = {
  filter?: ModelOrderProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderProductsQuery = {
  syncOrderProducts?:  {
    __typename: "ModelOrderProductConnection",
    items?:  Array< {
      __typename: "OrderProduct",
      id: string,
      productID: string,
      quantity: number,
      option?: string | null,
      orderID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      product?:  {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRating?: number | null,
        rating?: number | null,
        price: number,
        oldPrice?: number | null,
        love?: number | null,
        loveCount?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order?:  {
        __typename: "Order",
        id: string,
        userSub: string,
        fullname: string,
        phoneNumber?: string | null,
        city?: string | null,
        address?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        image?: string | null,
        userID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRating?: number | null,
    rating?: number | null,
    price: number,
    oldPrice?: number | null,
    love?: number | null,
    loveCount?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartProductSubscription = {
  onCreateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCartProductSubscription = {
  onUpdateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCartProductSubscription = {
  onDeleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    userSub: string,
    quantity: number,
    option?: string | null,
    productID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateOrderProductSubscription = {
  onCreateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateOrderProductSubscription = {
  onUpdateOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteOrderProductSubscription = {
  onDeleteOrderProduct?:  {
    __typename: "OrderProduct",
    id: string,
    productID: string,
    quantity: number,
    option?: string | null,
    orderID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRating?: number | null,
      rating?: number | null,
      price: number,
      oldPrice?: number | null,
      love?: number | null,
      loveCount?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order?:  {
      __typename: "Order",
      id: string,
      userSub: string,
      fullname: string,
      phoneNumber?: string | null,
      city?: string | null,
      address?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userSub: string,
    fullname: string,
    phoneNumber?: string | null,
    city?: string | null,
    address?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
