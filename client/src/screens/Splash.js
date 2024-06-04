import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import animation from '../constants/animation';

const Splash = () => {
    const navigation = useNavigation();
    
    function handleClick () {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText} numberOfLines={2}>
                Welcome to LankaQuest
            </Text>
            <LottieView
                source={animation.Ani}
                autoPlay
                loop
                style={styles.animation}
            />
            <TouchableOpacity style={styles.button} onPress={handleClick} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Start Your Adventure</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    welcomeText: {
        color: '#255213',
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        padding: 20
    },
    animation: {
        width: '100%',
        height: '50%',
        backgroundColor: 'transparent'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#255213',
        borderRadius: 5,
        position: 'absolute',
        bottom: 100,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
});
