import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import HomeIcon from '@material-ui/icons/Home';
import styles from './styles'
import './styles.ts'
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
            <View style={styles.logo}>Pleasured by Pinky</View>
            <View style={styles.searchContainer}>
                <Feather name="search" size={24} color="black" />
            </View>
            <View style={styles.middleContainer}>
                <p style={styles.responseButton}>Sign In</p>
                <p style={styles.responseButton}>Sign Up</p>
            </View>
            <View style={styles.navMenu}>
                <View style={styles.navIcon}>
                    <HomeIcon />                  
                </View>
                <View style={styles.navIcon}>                    
                    <MaterialIcons name="business-center" size={24} color="black" />
                </View>
                <View style={styles.navIcon}>
                <Ionicons name="person-circle" size={24} color="black" />
                </View>
                <View style={styles.navIcon}>
                    <AntDesign name="mail" size={24} color="black" />
                </View>
                <View style={styles.navIcon}>
                    <MaterialIcons name="dynamic-feed" size={24} color="black" />
                </View>
            </View>
            <TouchableOpacity style={styles.shopping} onPress={displayMenu}>
                <FontAwesome5 name="shopping-bag" size={24} color="black" />
                <p style={styles.badge}>4</p>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon} onPress={displayMenu}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
