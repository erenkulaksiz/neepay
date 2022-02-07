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
import NotificationsIcon from '../../icons/notifications';
import InfoIcon from '../../icons/info';
import MenuIcon from '../../icons/menu';
import PayIcon from '../../icons/pay';
import SendIcon from '../../icons/send';

import LogoSm from '../../images/logo_sm.png';
import Avatar from '../../images/avatar.png';

const { width } = Dimensions.get("window");

const styles2 = StyleSheet.create({
    sideMenuStyle: {
        margin: 0,
        width: width * 0.75 // SideMenu width
    }
});

const QRScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: 80, flexDirection: "row", backgroundColor: "#00A3E1", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0, borderBottomWidth: 0 }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start", }}>
                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                </View>
                <View style={{ flex: 33, justifyContent: "center" }}>

                </View>
            </View>
            <View style={{ width: "100%", height: 240, backgroundColor: "#00A3E1", paddingTop: 24, paddingLeft: 24, paddingRight: 24, borderBottomLeftRadius: 46, borderBottomRightRadius: 46, borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "white" }}>
                    QR İşlemleri
                </Text>
                <Text style={{ color: "#DDDDDD" }}>
                    Buradan, neepay QR işlemlerinizi gerçekleştirebilirsiniz.
                    Dilerseniz para gönderebilir/alabilir, kolay ATM ödemesi yapabilirsiniz
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                <View style={{ position: "absolute", top: -100, }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("QRMakeScreen", { type: "PAY" })} style={{ width: 166, height: 166, borderColor: "#DCDCDC", justifyContent: "center", alignItems: "center", borderRadius: 17, borderStyle: "solid", borderWidth: 1, backgroundColor: "white", elevation: 12 }}>
                        <PayIcon width={100} height={100} />
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Ödeme Yap</Text>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Kolay ATM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("QRMakeScreen", { type: "SENDPAY" })} style={{ width: 166, height: 166, marginTop: 24, justifyContent: "center", alignItems: "center", borderColor: "#DCDCDC", borderRadius: 17, borderStyle: "solid", borderWidth: 1, backgroundColor: "white", elevation: 12 }}>
                        <SendIcon width={100} height={100} />
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Para Gönder/Al</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(QRScreen);
