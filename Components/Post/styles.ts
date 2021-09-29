import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    rootContainer: {
        padding: 10,
    },
    postHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name:{
        fontSize: 14,
        color: 'black',
    },
    username:{
        fontSize: 11,
        color: 'gray',
        fontWeight: 'bold'
    },
    headerTitle: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    postContainer: {
        padding: 10
    },
    postImage: {
        width: '100%',
        height: 280,
        borderRadius: 25,
        padding: 10,
        resizeMode: 'contain'
    },
    postText: {
        lineHeight: 22,
        alignSelf: 'center',
        fontSize: 14,
    },
    reactionContainer: {
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'pink',
        width: 200,
    },
    mainReactionConrtainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#eeeeee',
        margin: 5,
        padding: 5
    },
    reactionCount: {
        fontSize: 11,
        padding: 3,
        color: 'gray'
    },

})

export default styles;