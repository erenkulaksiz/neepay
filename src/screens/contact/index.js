import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import Modal from 'react-native-modal';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import ArrowLeft from '../../icons/arrow_left';

import LogoSm from '../../images/logo_sm.png';

const ContactScreen = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: 80, flexDirection: "row", backgroundColor: "#00A3E1", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0, borderBottomWidth: 0 }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <ArrowLeft width={40} height={40} fill={"#fff"} style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                </View>
                <View style={{ flex: 33, justifyContent: "center" }}>

                </View>
            </View>
            <View style={{ width: "100%", height: 120, backgroundColor: "#00A3E1", paddingTop: 24, paddingLeft: 24, paddingRight: 24, borderBottomLeftRadius: 46, borderBottomRightRadius: 46, borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "white" }}>
                    İletişim
                </Text>
                <Text style={{ color: "#DDDDDD" }}>
                    Daima her konuda bize 7/24 ulaşabilirsin.
                </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", paddingTop: 24 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>Müşteri Hizmetleri</Text>
                <Text style={{ fontSize: 18, color: "black" }}>+90 0850 000 0000</Text>
                <View style={{ width: "40%", height: 1, backgroundColor: "#000", marginTop: 12 }} />
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "black", marginTop: 12 }}>Eposta Adresi</Text>
                <Text style={{ fontSize: 18, color: "black" }}>destek@neepay.co</Text>
                <View style={{ width: "40%", height: 1, backgroundColor: "#000", marginTop: 12 }} />
                <Text style={{ fontWeight: "bold", fontSize: 20, color: "black", marginTop: 12 }}>İnternet Sitesi</Text>
                <Text style={{ fontSize: 18, color: "black" }}>www.neepay.co</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(ContactScreen);
