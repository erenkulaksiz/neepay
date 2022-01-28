import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import ArrowLeft from '../../icons/arrow_left';
import ReplyIcon from '../../icons/reply';
import ArrowRightIcon from '../../icons/arrow_right';
import TLIcon from '../../icons/tl';
import PhoneIcon from '../../icons/phone';
import CheckIcon from '../../icons/check';

import LogoSm from '../../images/logo_sm.png';

const SuccessScreen = (props) => {

    const onFinish = () => {
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'RootScreen' }],
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: 80, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "row", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>

                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                </View>
                <View style={{ flex: 33, justifyContent: "center" }}>

                </View>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ backgroundColor: "white", padding: 24, borderRadius: 128, borderWidth: 4, borderColor: "#00BE13" }}>
                    <CheckIcon width={48} height={48} fill="#00BE13" />
                </View>
                <Text style={{ marginTop: 12, color: "#00BE13", fontSize: 24, fontWeight: "600" }}>İşlem Tamamlandı</Text>
                <Text>Transfer işleminiz tamamlandı.</Text>
            </View>

            <View style={{ justifyContent: "flex-end", paddingLeft: 24, paddingRight: 24, }}>
                <Button
                    text="Ana Sayfa"
                    icon={<CheckIcon width={24} height={24} fill="#fff" />}
                    style={{ marginBottom: 48 }}
                    onPress={() => onFinish()}
                />
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

export default connect(mapStateToProps)(SuccessScreen);
