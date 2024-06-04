import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const Login = () => {
  return (
    <View style={styles.container}>
        <Header/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEECEC'
    },
})