/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          content
          image
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      image
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        username
        email
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          id
          username
          email
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        image
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          id
          username
          email
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      name
      content
      avgRating
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        avgRating
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        content
        avgRating
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      image
      images
      options
      avgRating
      rating
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        images
        options
        avgRating
        rating
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        image
        images
        options
        avgRating
        rating
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      userSub
      quantity
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        description
        image
        images
        options
        avgRating
        rating
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        quantity
        productID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          description
          image
          images
          options
          avgRating
          rating
          price
          oldPrice
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        quantity
        productID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          description
          image
          images
          options
          avgRating
          rating
          price
          oldPrice
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
      id
      productID
      quantity
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        description
        image
        images
        options
        avgRating
        rating
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      order {
        id
        userSub
        fullname
        phoneNumber
        city
        address
        zipCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        quantity
        orderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          description
          image
          images
          options
          avgRating
          rating
          price
          oldPrice
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        order {
          id
          userSub
          fullname
          phoneNumber
          city
          address
          zipCode
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        productID
        quantity
        orderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          description
          image
          images
          options
          avgRating
          rating
          price
          oldPrice
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        order {
          id
          userSub
          fullname
          phoneNumber
          city
          address
          zipCode
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userSub
      fullname
      phoneNumber
      city
      address
      zipCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        fullname
        phoneNumber
        city
        address
        zipCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        fullname
        phoneNumber
        city
        address
        zipCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
