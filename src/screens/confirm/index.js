import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// Styles
import styles from './style';

// Components
import Button from '../../components/button';

// Images/icons
import LoginIcon from '../../icons/login';
import LinkIcon from '../../icons/link';
import Logo from '../../images/logo.png';

const ConfirmScreen = (props) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [_props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const CELL_COUNT = 5;

    useEffect(() => {
        ref.current.focus();
    }, []);

    useEffect(() => {
        if (value.length == CELL_COUNT) {
            // next page
            if (value == "11111") {
                alert("safdjhads");
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <View style={{ height: 60, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 24, color: "black", fontWeight: "600" }}>Telefonu Onayla</Text>
                </View>
            </View>
            <View style={{ flex: 90 }}>
                <View style={styles.banner}>
                    <Image source={Logo} style={styles.landingBanner} resizeMode='contain' resizeMethod='scale' />
                </View>
                <View style={styles.content}>
                    <View style={{ width: "100%", marginTop: 12 }}>
                        <Text style={{ textAlign: "center", fontSize: 18, color: "black", fontWeight: "bold" }}>Telefon numaranıza SMS olarak gönderilen 5 haneli kodu giriniz.</Text>
                    </View>
                    <View style={{ marginTop: 32, alignItems: "center" }}>
                        <CodeField
                            ref={ref}
                            {..._props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <View style={{
                                    justifyContent: "center", alignItems: "center", height: 60,
                                    borderRadius: 8,
                                    width: 40,
                                    lineHeight: 38,
                                    borderWidth: 2,
                                    borderColor: '#F56B00',
                                }}>
                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                </View>
                            )}
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

export default connect(mapStateToProps)(ConfirmScreen);
