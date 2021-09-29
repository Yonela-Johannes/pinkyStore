import React from 'react'
import Announcement from './Announcement'
import {View, Text} from 'react-native'
import styles from './styles'
import Slider from './../Slider/Slider'
import SliderList from './../Slider/SliderList'
import './styles.ts'
function Landing() {
    return (
        <View style={styles.landing}>
            <View style={styles.introContainer}>
                {/* <Announcement /> */}
                {/* <SliderList /> */}
            </View>
        </View>
    )
}

export default Landing
