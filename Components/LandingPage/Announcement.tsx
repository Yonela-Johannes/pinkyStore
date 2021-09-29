import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


function Announcement() {
    return (
        <View style={styles.announcement}>
            <Text style={styles.announcementText}>
                Super shopping deal on orders over R300
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    announcement: {
        padding: 5,
    },
    announcementText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'purple',
    },
    landingImage: {
        width: '100%',
        height: 50
    }
})

export default Announcement
