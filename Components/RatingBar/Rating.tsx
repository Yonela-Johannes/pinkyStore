import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Rating = () => {
    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5]);
    const heartFilled = 'https://www.pngfind.com/pngs/m/438-4388061_minimal-heart-png-pink-heart-icon-transparent-background.png'
    const heartEmpty = 'https://png.pngitem.com/pimgs/s/50-507715_pink-heart-clipart-vector-clip-art-free-design.png'

    const CustomRating = () => {
        return (
            <View style={styles.customRating}>
                {maxRating.map((item, key) => {
                    return(
                    <TouchableOpacity activeOpacity={0.7}
                        key={item}
                        onPress={() => setDefaultRating(item)}>
                            <Image style={styles.starImage} source={item <= defaultRating
                            ? {uri: heartFilled}
                            : {uri: heartEmpty}
                        }
                        />
                    </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    return(
        <View style={styles.ratingContainer}>
            <CustomRating />
        </View>
    )
}
const styles = StyleSheet.create({
    ratingContainer: {
        alignItems: 'center',
    },
    customRating: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starImage:{
        width: 15,
        height: 15,
    }
})
export default Rating
