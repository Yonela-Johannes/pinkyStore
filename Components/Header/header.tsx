import React from 'react'
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import { Input } from 'react-native-elements'
import styles from './styles'
import { Entypo, Ionicons, MaterialIcons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
const displayMenu = () => {
    console.log(" You Pressed me Yonela Johannes")
    {
        let menuClose = document.querySelector('.menuIcon')

            console.log(menuClose)

    }
}
function Header() {
    return (
        <View style={styles.header}>
            {/* <View>
                <Text style={styles.logo}>Pleasured by Pinky</Text>
            </View> */}
            <View style={styles.navMenu}>
                <TouchableOpacity style={styles.navIcon}>
                <   Entypo name="home" size={20} color="black" /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.navIcon}>                    
                    <MaterialIcons name="business-center" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navIcon}>
                    <Ionicons name="person-circle" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navIcon}>
                    <AntDesign name="mail" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navIcon}>
                    <MaterialIcons name="dynamic-feed" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.subHeader}>
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <Feather name="search" size={20} color="black" />
                        {/* <Input/> */}
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.shopping} onPress={displayMenu}>
                        <View style={styles.shop}>
                            <FontAwesome5 name="shopping-bag" size={24} color="black" />
                        </View>
                        <Text style={styles.badge}>4</Text>
                    </TouchableOpacity>                    
                </View>
            </View>
        </View>
    )
}

export default Header
