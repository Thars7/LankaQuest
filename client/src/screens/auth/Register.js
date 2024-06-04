import { Dimensions, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Signup</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder='User name'
                    textAlign='center'
                    value={name}
                    onChangeText={setName} />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Email address'
                    textAlign='center'
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false} />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Create password'
                    textAlign='center'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Confirm password'
                    textAlign='center'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Home')}>
                    <Text
                        style={styles.buttonText}>
                        Signup
                    </Text>
                </TouchableOpacity>
                <Text>Or</Text>
                <View style={styles.iconView}>
                    <Icon name='google' size={40} style={styles.iconStyle} />
                    <Icon name='facebook' size={40} style={styles.iconStyle} />
                    <Icon name='instagram' size={40} style={styles.iconStyle} />
                </View>
            </View>
            <View style={styles.loginWindow}>
                <View style={styles.icon1View}>
                    <TouchableOpacity>
                        <Icon1 name='chevron-up-circle-outline' size={20} style={styles.icon1Style} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon1 name="chevron-down-circle-outline" size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginText}>Login</Text>

            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEECEC',
        justifyContent: 'space-between'
    },
    signupContainer: {
        flex: 0.8,
        justifyContent: 'flex-start',
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        height: height / 2,
        width: "85%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000000',
        elevation: 10
    },
    signupText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 25
    },
    inputBox: {
        height: 40,
        width: 250,
        marginBottom: 10,
        borderWidth: 0.4,
        borderRadius: 10
    },
    buttonStyle: {
        width: 90,
        height: 40,
        backgroundColor: '#005252',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    buttonText: {
        color: '#FFFFFF',
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        alignItems: 'center'
    },
    iconStyle: {
        marginHorizontal: 10
    },
    loginWindow: {
        flex: 0.15,
        width: width,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        elevation: 10,
        shadowOpacity: 1,
    },
    icon1View: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingHorizontal: 5,
        bottom: 10,
        marginHorizontal: 10,
        justifyContent: 'space-evenly'
    },
    icon1Style: {
        marginHorizontal: 5
    },
    loginText: {
        fontWeight: '800',
        bottom: 15,
        fontSize: 20,
        color: '#000000'
    }
})