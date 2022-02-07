import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { getUniqueId } from 'react-native-device-info';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import EmailIcon from '../../icons/email';
import PhoneIcon from '../../icons/phone';
import ArrowRightIcon from '../../icons/arrow_right';
import Logo from '../../images/logo.png';

const LoginScreen = (props) => {
    const inputRef = useRef(null);
    const [entry, setEntry] = useState("");

    const [entryType, setEntryType] = useState("");

    const posText = useSharedValue(16);
    const txtColor = useSharedValue("#C0C0C0");
    const txtBack = useSharedValue("white");

    const [err, setErr] = useState("");

    const [isFocused, setIsFocused] = useState(false);

    const onContinue = async () => {
        if (entry.length == 0) {
            setErr("Lütfen email veya telefon numarası giriniz.");
            return;
        }

        if (entryType == "email" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entry))) {
            setErr("Lütfen geçerli bir email giriniz.");
            return;
        }
        const uid = getUniqueId();
        const formData = new FormData();
        const token = props.local.anon_token;
        formData.append("uniqueDeviceID", uid);
        formData.append("token", token);
        formData.append("apiUsername", "neepay");
        formData.append("apiPassword", 123456);
        formData.append("username", entry);
        formData.append("password", 123456);
        console.log("formdata: ", formData);
        const res = await fetch('https://api.neepay.co/authentication/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            body: formData
        })
            .then(response => response.json())
            .catch(error => {
                console.log("error with login: ", error);
            });
        console.log("res: ", res);

        //props.navigation.navigate("ConfirmScreen", { type: "LOGIN" });
    }

    useEffect(() => {
        if (entry.length != 0) {
            if (isNaN(entry)) {
                setEntryType("email");
            } else {
                setEntryType("phone");
            }
        } else {
            setEntryType("");
        }
    }, [entry]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (isFocused) {
            posText.value = -12;
            txtColor.value = "#FF4B12";
            txtBack.value = "white";
        } else {
            if (entry.length == 0) {
                posText.value = 16;
                txtColor.value = "#C0C0C0";
                txtBack.value = "transparent";
            }
        }
    }, [isFocused]);

    const animatedTextStyles = useAnimatedStyle(() => {
        return {
            top: withTiming(posText.value, {
                duration: 125,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            zIndex: 20,
            left: 12,
            paddingLeft: 4,
            paddingRight: 4,
            color: txtColor.value,
            fontWeight: "600",
            backgroundColor: "white"
        };
    });

    return (
        <View style={styles.container}>
            <View style={{ height: 60, }}>

            </View>
            <View style={{ flex: 90 }}>
                <View style={styles.banner}>
                    <Image source={Logo} style={styles.landingBanner} resizeMode='contain' resizeMethod='scale' />
                </View>
                <View style={styles.content}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity style={{ zIndex: 20 }} activeOpacity={1} onPress={() => inputRef.current.focus()}>
                            <Animated.Text style={[{ position: "absolute" }, animatedTextStyles]}>
                                Email veya telefon
                            </Animated.Text>
                        </TouchableOpacity>
                        <View style={{ position: "absolute", padding: 2, width: "100%", zIndex: 4, }}>
                            <View style={{ flexDirection: "row", backgroundColor: "white", borderRadius: 6, alignItems: "center", overflow: "hidden", }}>
                                {
                                    entryType == "email" ? <EmailIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} /> : entryType == "phone" &&
                                        <PhoneIcon width={24} height={24} fill="#DF3500" style={{ height: "100%", marginLeft: 10 }} />
                                }
                                <TextInput
                                    onChangeText={text => setEntry(text)}
                                    style={styles.input}
                                    ref={inputRef}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    maxLength={entryType == "phone" ? 10 : 30}
                                />
                            </View>
                        </View>
                        <LinearGradient style={styles.border} colors={['#EC0000', '#D49900']} start={{ x: 0, y: 1 }} end={{ x: 1, y: -1 }} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} />
                    </View>
                    {err.length != 0 && <Text style={{ marginTop: 8, color: "#EC0000" }}>{err}</Text>}
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <Button
                            text="Devam Et"
                            icon={<ArrowRightIcon width={24} height={24} fill="#fff" />}
                            style={{ marginBottom: 48 }}
                            onPress={() => onContinue()}
                        />
                    </View>
                </View>
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

export default connect(mapStateToProps)(LoginScreen);
