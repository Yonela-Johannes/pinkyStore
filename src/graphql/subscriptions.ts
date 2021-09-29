/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      email
      image
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      email
      image
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      email
      image
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      content
      image
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        userID
        user {
          id
          username
          name
          email
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        userID
        user {
          id
          username
          name
          email
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userID
      postID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        userID
        user {
          id
          username
          name
          email
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        likes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
      love
      loveCount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
      love
      loveCount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
      love
      loveCount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      userSub
      quantity
      option
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
        love
        loveCount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      userSub
      quantity
      option
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
        love
        loveCount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      userSub
      quantity
      option
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
        love
        loveCount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
      id
      productID
      quantity
      option
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
        love
        loveCount
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
      id
      productID
      quantity
      option
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
        love
        loveCount
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
      id
      productID
      quantity
      option
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
        love
        loveCount
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userSub
      fullname
      phoneNumber
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userSub
      fullname
      phoneNumber
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userSub
      fullname
      phoneNumber
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
