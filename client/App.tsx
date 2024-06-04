import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/screens/auth/Register'
import Header from './src/components/Header'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'


const App = () => {
  return (
    // <View>
        <StackNavigation/>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})