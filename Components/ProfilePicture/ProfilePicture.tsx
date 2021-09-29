import React from 'react';
import { View, Text, Image } from 'react-native';

export type ProfilePictureProps = {
    image: string,
    size?: number
}

const ProfilePicture = ({image, size = 20}: ProfilePictureProps) => (
    <Image
    source={{uri: image || 'https://www.clipartmax.com/png/middle/256-2560043_customer-clipart-club-member-female-avatar-png.png'}}
    style={{width: size, height: size, borderRadius: size}} />
)

export default ProfilePicture