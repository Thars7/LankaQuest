import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const district = [
    { "name": "Jaffna" },
    { "name": "Kilinochchi" }, 
    { "name": "Mannar" },
    { "name": "Mullaitivu" },
    { "name": "Vavuniya" },
    { "name": "Puttalam" },
    { "name": "Kurunegala" },
    { "name": "Gampaha" },
    { "name": "Colombo" },
    { "name": "Kalutara" },
    { "name": "Anuradhapura" },
    { "name": "Polonnaruwa" },
    { "name": "Matale" },
    { "name": "Kandy" },
    { "name": "Nuwara Eliya" },
    { "name": "Kegalle" },
    { "name": "Ratnapura" },
    { "name": "Trincomalee" },
    { "name": "Batticaloa" },
    { "name": "Ampara" },
    { "name": "Badulla" },
    { "name": "Monaragala" },
    { "name": "Hambantota" },
    { "name": "Matara" },
    { "name": "Galle" },
]
const DropDown = ({setCategory}) => {

    const [isSelected, setIsSelected] = useState(false);
    const [selectDistrict, setSelectDistrict] = useState('--district--');
    // const [selectDistrict, setSelectDistrict] = useState(category);


    const handleSelectDistrict = (name) => {
        setSelectDistrict(name)
        setCategory(name);
        setIsSelected(false)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.selectDistrictBox}
                activeOpacity={0.5}
                onPress={() => setIsSelected(!isSelected)}
            >
                <Text
                    style={styles.districtsText}>
                    {selectDistrict}
                </Text>
                <Icon
                    name={isSelected?'caret-up-outline': 'caret-down-outline'}
                    size={20}
                    style={styles.dropDown} />
            </TouchableOpacity>

{/* Conditional Rendering:  */}
            {isSelected && (
                <ScrollView style={styles.dropDownList} nestedScrollEnabled={true}>
                    {district.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleSelectDistrict(item.name)}
                                style={styles.districtSelectionBox}
                            >
                                <Text key={index}>{item.name}</Text>

                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            )}
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    selectDistrictBox: {
        flexDirection: 'row',
        height: 50,
        width: 280,
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        borderRadius: 15,
    },
    dropDown: {
        marginTop: 15,
        marginRight: 10,
    },
    districtsText: {
        marginTop: 15,
        marginLeft: 10,
        color: 'rgba(0,0,0,0.5)'
    },
    dropDownList:{
        width: 280,
        backgroundColor: '#E5E5E5',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: -15,
        maxHeight: 200,
        
    },
    districtSelectionBox:{
        width:280,
        padding:10,
        borderBottomColor:'#D9D9D9',
        borderBottomWidth:1
    }
})