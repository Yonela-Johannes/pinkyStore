import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity,StyleSheet, TextInput, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import 'react-native-get-random-values'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Amplify, { Auth, API, graphqlOperation, Storage} from 'aws-amplify';
import { createPost } from '../../src/graphql/mutations'
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid'

console.log(uuid())

export default function NewPost() {
    const [post, setPost] = useState("")
    const [image, setImage] = useState(null)
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const uploadImage = async () => {
          try{
            const response = await fetch(image);
            const blob = await response.blob();
            const urlParts = image.split('.')
            const extension = urlParts[urlParts.length - 1];
            console.log("extension", extension);
            const key = `${uuid()}.${extension}`;
            await Storage.put(key, blob);
            console.log('This is the key', key)
            return key;
          }catch(e){
              console.log(e)
          }
          return;
      }

    const onPostPost = async () => {
      let pic;
      if(!!image){
        pic = await uploadImage();
      }
      try{
          const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true});
          const newPost = {
              content: post,
              image: image,
              userID: currentUser.attributes.sub,
          }
          await API.graphql(graphqlOperation(createPost, { input: newPost }))
          navigation.goBack();
      } catch (e){
          console.log('Check this error',e)
      }

    }
  return (
      <View>
        <View style={{padding: 10, justifyContent: 'center'}}>
            <View style={styles.postContainer}>
                <TextInput value={post} onChangeText={(value) => setPost(value)} style={styles.postInput} numberOfLines={3} multiline={true} placeholder="What's happening today..." />
                <TouchableOpacity activeOpacity={0.7}  style={styles.imageButton} onPress={pickImage}>
                    <FontAwesome name="camera-retro" size={24} color="#fe7f7f" />
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.postButton} onPress={onPostPost}>
            <Text style={styles.buttonText}>Post News</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
  );
}

const styles = StyleSheet.create({

    postButton: {
        position: 'absolute',
        right: 20,
        top: 150,
        backgroundColor: 'pink',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15
    },
    buttonText: {
        color: 'white'
    },
    postContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5
    },
    postInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 16
    },
    imageInput: {

    },
    imageButton: {
        borderColor: '#fe7f7f',
        borderWidth: 1,
        // backgroundColor: 'gray',
        padding: 10,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }

})