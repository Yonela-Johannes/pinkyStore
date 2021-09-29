import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'white',
    },
    wrapper: {
        backgroundColor: '#eddddd',
 
        width: 350,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'pink',
        borderWidth: 1,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        color: 'black'
    },
    oldPriceContainer: {
        flexDirection: 'row',        
    },
    costContainer: {
        flexDirection: 'row',        
    },
    oldPrice: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 9,
        textDecorationLine: 'line-through',
    },
    contentCost:  {
        fontSize: 13,
        fontWeight: 'bold',
    },
    rating :{
        color: 'gray',
        fontSize: 10,
        paddingLeft: 5 
    },
    loveCount :{
        color: 'pink',
        fontSize: 10,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    contentDescription: {
        width: 180,
        fontSize: 12,
        padding: 5
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    left: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'pink',
        borderRadius: 30,
        padding: 5,
        margin: 10,
        opacity: 0.8,
        zIndex: 999999,

    },
    right: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'pink',
        borderRadius: 30,
        padding: 5,
        margin: 10,
        opacity: 0.8,
        zIndex: 999999,
    },
    mainContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        resizeMode: 'contain'
    },
 })

 export default styles;