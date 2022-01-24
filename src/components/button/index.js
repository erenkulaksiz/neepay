import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './style';

const Button = ({ icon, text, btnColor = "#1CC794", txtColor = "#fff", onPress, style, isLoading = false }) => {

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, backgroundColor: btnColor, ...style, overflow: "hidden" }} activeOpacity={0.75}>
            <LinearGradient colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.content}>
                {icon}
                <Text style={{ ...styles.text, color: txtColor, marginLeft: icon ? 8 : 0, }}>{text}</Text>
            </LinearGradient>
            {
                isLoading && <View style={styles.loadingContainer}>
                    <View style={{ zIndex: 2 }}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                    <View style={styles.loadingOverlay} />
                </View>
            }
        </TouchableOpacity >
    )
}

export default Button