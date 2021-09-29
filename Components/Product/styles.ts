import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    name:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 20,
        lineHeight: 16
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    oldPrice: {
        color: 'red',
        textDecorationLine: 'line-through',
        fontSize: 12
    },
    price: {
        color: '#ff8989',
        fontSize: 18,
        fontWeight: 'bold'
    },
    averageRate: {

    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    rating :{
        color: 'gray',
        fontSize: 10,
        paddingLeft: 5 
    },
    loveCount: {
        paddingHorizontal: 10,
        fontSize:10,
        color: 'gray',
    },
    rate: {

    }

})

export default styles;