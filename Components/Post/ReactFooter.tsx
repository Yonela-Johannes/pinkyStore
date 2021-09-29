import React, {useEffect, useState} from 'react'
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import Amplify, { Auth, API, graphqlOperation} from 'aws-amplify';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles'
import { v4 as uuidv4 } from 'uuid';
import { createLike, deleteLike } from '../../src/graphql/mutations'
import { getUser } from '../../src/graphql/queries'
import { createUser } from '../../src/graphql/mutations'

export type FeedType ={
    id: String,
    createdAt: string,
    content: string,
    image: string,
    numberOfComments?: number,
}
export type ReactFooterProps = {
    feed: FeedType
    }

export default function ReactFooter({feed}: ReactFooterProps) {
    console.log("This is you first data console", feed)

    const [user, setUser] = useState(null);
    const [myLike, setMyLike] = useState(null);
    const [likesCount, setLikesCount] = useState(feed.likes.items.length);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);

            const searchedLike = feed.likes.items.find((like) => like.userID === currentUser.attributes.sub);
            setMyLike(searchedLike);
        }

        fetchUser();
    }, [])

    const submitLike = async () => {

        const like = {
            userID: user.attributes.sub,
            postID: post.id,
        }
    }

        // try{
        //     const res = await API.graphql(graphqlOperation(createLike, {input: like}))
        //     setMyLike(res.data.createLike)
        //     setLikesCount(likesCount + 1);
        // }catch (e) {
        //     console.log(e)
        // }

        const removeLike = async () => {
            try{
                await API.graphql(graphqlOperation(deleteLike, {input: {id: myLike.id}}))
                setLikesCount(likesCount -1);
                setMyLike(null);
            }catch(e){
                console.log(e)
            }
        }
        const onLike = async () => {
            if(!user){
                return;
            }
            if(!myLike){
                await submitLike();
            }else{
                await removeLike();
            }
        }

    return (
        <View style={styles.reactionContainer}>
            <View style={styles.mainReactionConrtainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={onLike}>
                    <AntDesign name={!myLike ? 'hearto': 'heart'} size={20} color={!myLike ? "grey" : 'red'} />
                    <Text style={styles.reactionCount}>
                    {likesCount}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <FontAwesome name="comments" size={20} color="pink" />  
                    <Text style={styles.reactionCount}>
                       25
                    </Text> 
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <FontAwesome name="share-square-o" size={20} color="pink" />
                    <Text style={styles.reactionCount}>
                    300
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
