import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    wrapper: {
        borderBottomWidth: 1,
        borderColor: 'pink',
        borderWidth: 1,
        backgroundColor: '#eddddd',
 
        width: 320,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10,
        color: '#fb839f'
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
        fontSize: 10,
        textDecorationLine: 'line-through',
    },
    contentCost:  {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
    },
    rating :{
        color: 'gray',
        fontSize: 10,
        paddingLeft: 5 
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
        height: 60,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        resizeMode: 'contain'
    },
 })

 export default styles;