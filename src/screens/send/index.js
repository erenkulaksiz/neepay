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

import LogoSm from '../../images/logo_sm.png';

const SendScreen = (props) => {

    const emailRef = useRef(null);
    const emailInput = useSharedValue({ x: 16, y: 20, color: "#C0C0C0", back: "white" });
    const [emailEntry, setEmailEntry] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);

    const fullnameRef = useRef(null);
    const fullnameInput = useSharedValue({ x: 16, y: 24, color: "#C0C0C0", back: "white" });
    const [fullnameEntry, setFullnameEntry] = useState("");
    const [fullnameErr, setFullnameErr] = useState("");
    const [fullnameFocus, setFullnameFocus] = useState(false);

    useEffect(() => {
        fullnameRef.current.focus();
        console.log("params: ", props.route.params);
    }, []);

    useEffect(() => {
        if (emailFocus) {
            emailInput.value = { ...emailInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (emailEntry.length == 0) {
                emailInput.value = { ...emailInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [emailFocus]);

    useEffect(() => {
        if (fullnameFocus) {
            fullnameInput.value = { ...fullnameInput.value, x: -12, y: 20, color: "#FF4B12", back: "white" };
        } else {
            if (fullnameEntry.length == 0) {
                fullnameInput.value = { ...fullnameInput.value, x: 16, y: 40, color: "#C0C0C0", back: "transparent" };
            }
        }
    }, [fullnameFocus]);

    const onContinue = () => {
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Success' }],
        });
    }

    const emailStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(emailInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(emailInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: emailInput.value.color,
            fontWeight: "600",
            backgroundColor: emailInput.value.back,
        };
    });

    const fullnameStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(fullnameInput.value.x, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: withTiming(fullnameInput.value.y, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            paddingLeft: 4,
            paddingRight: 4,
            color: fullnameInput.value.color,
            fontWeight: "600",
            backgroundColor: fullnameInput.value.back,
        };
    });

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: 80, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "row", borderWidth: 1, borderStyle: "solid", borderColor: "#C0C0C0", borderTopWidth: 0 }}>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "flex-start" }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <ArrowLeft width={40} height={40} fill={"#000"} style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 33, justifyContent: "center", alignItems: "center" }}>
                    <Image source={LogoSm} style={{ width: 24, height: 50, }} />
                </View>
                <View style={{ flex: 33, justifyContent: "center" }}>

                </View>
            </View>
            <View style={{ width: "100%", height: 120, paddingTop: 24, paddingLeft: 24, paddingRight: 24, }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", fontWeight: "600", color: "black" }}>
                    {props.route.params.type == "NO" ? "Müşteri Numarası İle Gönder" : "Telefon Numarası İle Gönder"}
                </Text>
                <Text style={{ color: "#494949" }}>
                    {props.route.params.type == "NO" ? "Bir neepay müşteri numarasına para gönderin." : "Bir telefon numarasına para gönderin."}
                </Text>
            </View>
            <View style={{ ...styles.inputContainer, marginTop: 16 }}>
                <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => fullnameRef.current.focus()}>
                    <Animated.Text style={[{ position: "absolute" }, fullnameStyles]}>
                        Miktar
                    </Animated.Text>
                </TouchableOpacity>
                <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                    <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                        <TLIcon width={20} height={20} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                        <TextInput
                            onChangeText={text => setFullnameEntry(text.replace(/[^0-9]/g, ''))}
                            style={styles.input}
                            ref={fullnameRef}
                            onFocus={() => setFullnameFocus(true)}
                            onBlur={() => setFullnameFocus(false)}
                            maxLength={10}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => emailRef.current.focus()}>
                    <Animated.Text style={[{ position: "absolute" }, emailStyles]}>
                        {props.route.params.type == "NO" ? "Müşteri Numarası" : "Telefon Numarası"}
                    </Animated.Text>
                </TouchableOpacity>
                <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                    <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                        {props.route.params.type == "NO" ? <ReplyIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} /> :
                            <PhoneIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />}
                        <TextInput
                            onChangeText={text => setEmailEntry(text)}
                            style={styles.input}
                            ref={emailRef}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            maxLength={32}
                            maxLength={11}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end", paddingLeft: 24, paddingRight: 24, }}>
                <Button
                    text="Devam Et"
                    icon={<ArrowRightIcon width={24} height={24} fill="#fff" />}
                    style={{ marginBottom: 48 }}
                    onPress={() => onContinue()}
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

export default connect(mapStateToProps)(SendScreen);
