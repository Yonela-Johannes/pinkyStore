import React,{ useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import RatingFeed from '../Components/RatingFeeds/RatingFeeds'
import { listRatings, getUser } from '../src/graphql/queries'
import {API, graphqlOperation, Auth } from 'aws-amplify'

export default function RatingScreen() {
  const [user, setUser] = useState(null)
  const [ratingsPost, setRatingsPost] = useState([])
  const [loading, setLoading] = useState(false)

  

  const fetchRatings = async () => {
    const ratingsData = await API.graphql(graphqlOperation(listRatings))
    setLoading(true)
    try{
      const ratingsData = await API.graphql(graphqlOperation(listRatings));
      setRatingsPost(ratingsData.data.listRatings.items)
    }
    catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRatings();
  }, [])
  return (
    <View style={styles.ratingContainer}>
      <FlatList 
      data={ratingsPost}
      renderItem={({ item }) => <RatingFeed post={item} />}
      keyExtractor={( id ) => id}
    />

     </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'column',
    flex: 1,
  },
})