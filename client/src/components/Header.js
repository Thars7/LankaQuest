import { Dimensions, ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" hidden/>
      <ImageBackground source={require('../assets/images/headerImage.png')} style={styles.headerImage}>
      </ImageBackground>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.25,
  },
  headerImage: {
    flex: 1,
    width: width,
    height: '100%',
  }
});
