import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header1 = ({title}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.lankaQuest}>LankaQuest</Text> */}
      <Text style={styles.lankaQuest}>{title}</Text>

      <View style={styles.underline}/>
    </View>
  )
}

export default Header1

const styles = StyleSheet.create({
    container:{
        height:"20%",
        width:"100%",
        backgroundColor:'#255213',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:'center'
    },
    lankaQuest:{
      color:'#FFF',
      fontSize:25,
      marginHorizontal:25
      
    },
    underline:{
      width:'25%',
      height:1,
      backgroundColor:'#FFF',
      marginHorizontal:25
    }
})