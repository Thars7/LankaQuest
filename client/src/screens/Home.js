import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header1 from '../components/Header1'
import dummydata from '../constants/dummydata';
import DropDown from '../components/DropDown';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");
  const [places, setPlaces] = useState(dummydata.places);

  useEffect(() => {
    if (category) {
      const filteredPlaces = dummydata.places.filter((item) => item.district === category);
      setPlaces(filteredPlaces);
    } else {
      setPlaces(dummydata.places);
    }
  }, [category])

  const renderPopular = () => {
    return (
      <View style={styles.renderContainer}>
        <Text style={styles.popularPlaces}>Popular Places</Text>
        <FlatList
          data={dummydata.popularPlaces}
          keyExtractor={(item) => item.name}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View style={styles.renderItemBox} >
                <TouchableOpacity activeOpacity={0.5} onPress={()=> handleClick(item)}>
                  <Image source={item.image} style={{ width: 150, height: 125 }} />
                </TouchableOpacity>
                <Text style={styles.renderItemBoxText}>{item.name}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }
  const handleClick=(item)=>{
    navigation.navigate("Description",{item:item})
  }
  return (
    <View style={{ flex: 1 }}>
      <Header1 title='LankaQuest'/>
      <FlatList
        data={places}
        ListHeaderComponent={
          <View>
            {renderPopular()}
            <DropDown setCategory={setCategory} />

          </View>
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>handleClick(item)}>
                <Image source={item.image} style={{height:200,width:250}}/> 
              </TouchableOpacity>
              <Text style={styles.renderItemBoxText}>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  renderContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  popularPlaces: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000'
  },
  renderItemBox: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  renderItemBoxText: {
    fontWeight: '400',
    color: '#000'
  }
})