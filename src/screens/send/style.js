import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    inputContainer: {
        height: 53,
        borderRadius: 8,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 16,
    },
    input: {
        zIndex: 9,
        height: "100%",
        borderRadius: 6,
        flex: 1,
        color: "black"
    },
    border: {
        flex: 1,
        width: "100%",
        borderRadius: 9,
        zIndex: 2,
    },
    box: {
        width: 64,
        height: 64,
        backgroundColor: "blue",
        borderRadius: 12,
    }
});