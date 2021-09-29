import React, { useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Post from '../Components/Post/Post'
import { useNavigation } from '@react-navigation/native';
import {API, graphqlOperation } from 'aws-amplify'

import { listPosts } from '../src/graphql/queries'

export default function FeedScreen() {
  const navigation = useNavigation();
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(false)

      const fetchFeeds = async () => {
        const postsData = await API.graphql(graphqlOperation(listPosts));

        console.log(postsData)
        setLoading(true)
        try{
          const postsData = await API.graphql(graphqlOperation(listPosts));
          setFeeds(postsData.data.listPosts.items)
        }catch (e){
          console.log(e)
        } finally {
          setLoading(false)
        }
      }  
      
      useEffect(() => {
      fetchFeeds();
    }, [])

  const createPostButton = () =>{
    navigation.navigate('NewPost')
}
  return (
    <View>
        <TouchableOpacity style={styles.newPost} activeOpacity={0.8} onPress={createPostButton}>
            <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      <FlatList 
      data={feeds}
      renderItem={({ item }) => <Post feed={item} />}
      keyExtractor={({id}) => id}
      refreshing={loading}
      onRefresh={fetchFeeds}
      />
     </View>
  );
}

const styles = StyleSheet.create({

  newPost: {
    position: 'absolute',
    right: 18,
    bottom: 15,
    backgroundColor: 'pink',
    borderRadius: 50,
    padding: 5,
    zIndex: 40,
}
})