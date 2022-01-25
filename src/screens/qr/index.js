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
import WalletPlusIcon from '../../icons/wallet_plus';
import WalletNegativeIcon from '../../icons/wallet_negative';
import LinkIcon from '../../icons/link';
import ArrowRight from '../../icons/arrow_right';
import ShoppingIcon from '../../icons/shopping';
import BankIcon from '../../icons/bank';
import ArrowLeft from '../../icons/arrow_left';
import NotificationsIcon from '../../icons/notifications';
import InfoIcon from '../../icons/info';
import MenuIcon from '../../icons/menu';

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
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>

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
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                swipeDirection="left"
                useNativeDriver
                propagateSwipe
                style={styles2.sideMenuStyle}>
                <View style={{ flex: 1, backgroundColor: "white", paddingLeft: 24, paddingRight: 24, paddingTop: 24, }}>
                    <TouchableOpacity style={{ width: "100%", alignItems: "flex-end" }} onPress={() => setModalVisible(false)}>
                        <ArrowLeft width={40} height={40} fill={"#000"} style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                    <Button
                        text="Bildirimler"
                        icon={<NotificationsIcon width={24} height={24} fill="#fff" />}
                        style={{ marginBottom: 24, marginTop: 24, overflow: "visible" }}
                        onPress={() => onContinue()}
                    />
                    <Button
                        text="İletişim"
                        icon={<InfoIcon width={24} height={24} fill="#fff" />}
                        style={{ marginBottom: 48, overflow: "visible" }}
                        onPress={() => onContinue()}
                    />
                </View>
            </Modal>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        reducer: state.mainReducer,
        local: state.local,
    }
};

export default connect(mapStateToProps)(QRScreen);
