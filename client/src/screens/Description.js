import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header1 from '../components/Header1'
import { useNavigation } from '@react-navigation/native'

const Description = ({route}) => {
  const navigation = useNavigation();

  const handleBtnPress =(location)=>{
    navigation.navigate('Location',{location:location})
  }

  const item = route.params.item
  console.log(item)
  return (
    <View style={styles.container}>
      <Header1 title={item.name}/>
      <Image source={item.image} style={styles.imageView} />
      <Text style={{textAlign:'justify',padding:25, color:'#000'}}>
        {item.description}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={()=>handleBtnPress(item.location)}>
        <Text style={{color:'#FFF'}}>View Location</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imageView:{ 
    width: 250, 
    height: 225, 
    alignSelf:'center',
    marginTop:25,
  },
  btn:{
    height:50,
    width:100,
    backgroundColor:'#255213',
    justifyContent:'center',
    borderRadius:10,
    alignSelf:'flex-end',
    marginRight:25,
    alignItems:'center'}
})