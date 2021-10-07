import React, {useEffect, useState} from 'react';
import { Auth, API, graphqlOperation} from 'aws-amplify';
import { S3Image } from 'aws-amplify-react-native'
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { getUser } from '../../src/graphql/queries'
import { createUser } from '../../src/graphql/mutations'
import moment from 'moment';

interface PostProps{
    feed: {
            id: string;
            username: string;
            name: string;
            userUri: string;
            title: string;
            createdAt: number;
            image: string;
            post: {
                status: string;
                imageUri: string;
                Video: string;
            },

    }
}
const Post = (props: PostProps) => {

    const saveUserToDB = async (user) => {
        await API.graphql(graphqlOperation(createUser, { input: user }))
    }
    
    const getRandomImage = () => {
        return 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYxMjA1OTg1ODEyMTYyNTI0/naomi-campbell-wearing-a-pearl-encrusted-bra-top-posing-in-a-hotel-room-in-new-york-august-1991-photo-by-terry-oneill_iconic-images_getty-images.jpg'
    }

    useEffect(() => {
        const updateUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true});
            console.log(userInfo)
            if(userInfo){
                const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }));
            if(!userData.data.getUser){
                const user = {
                    id: userInfo.attributes.sub,
                    username: userInfo.username,
                    email: userInfo.attributes.email,
                    image:  getRandomImage(),
                }
                await saveUserToDB(user);
                }else{
                    console.log('user already exist')
                }
            }
        }
        updateUser();
      }, [])

    const { feed } = props;
  return (
    <View style={styles.rootContainer}>
        <View style={styles.postHeaderContainer}>
            <View style={styles.userDetailsContainer}>
                <Text style={styles.username}>{!feed.username ? 'Visitor' : feed.username}</Text>
                <Image style={styles.userImage} source={require('../../img/logopinky.png')}/>
                <Text style={styles.email}>{!feed.email ? '@VisitorBePleasuredByPinky' : feed.email}</Text>
            </View>
            <Text style={{fontSize: 10, color:'gray'}}>{moment(feed.createdAt).fromNow()}</Text>
        </View>
        <View style={styles.postContainer}>
            {!!feed.image && <S3Image style={styles.postImage} imgKey={{uri: feed.image}}/>}
            <Text style={styles.postText}>{feed.content}</Text>
        </View>
    </View>
  );
}

export default Post;