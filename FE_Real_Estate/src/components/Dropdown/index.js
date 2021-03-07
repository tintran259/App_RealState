import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { StyleDropdown } from './Dropdown.style'
import Icon from 'react-native-vector-icons/AntDesign'


export default function Dropdown({ itemDropdown, valueDefault, onChangeValue, width, height }) {
   const [isChoose, setIsChoose] = useState(false)
   const handleChooseDropdown = () => {
      setIsChoose(!isChoose)
   }
   const [defaultValue, setDefaultValue] = useState(valueDefault ? valueDefault : "Select item")
   const item = itemDropdown
   const hanldeItem = (tab) => {
      setDefaultValue(tab.label);
      setIsChoose(false)
      onChangeValue(tab.value)
   }
   return (
      <View style={StyleDropdown.container}>
         <View style={{ position: "relative" }}>
            <TouchableOpacity
               style={[StyleDropdown.dropdown, width ? { width: width } : { maxWidth: 180 }]}
               onPress={handleChooseDropdown}>
               <Text style={StyleDropdown.title}>{defaultValue}</Text>
               {
                  isChoose ?
                     <Icon name="up" style={StyleDropdown.iconDown} />
                     :
                     <Icon name="down" style={StyleDropdown.iconDown} />
               }
            </TouchableOpacity>
         </View>
         <View style={[StyleDropdown.viewText, , width ? { width: width } : { width: 120 }]}>
            {
               isChoose ?
                  <View >
                     {
                        item && item.map((tab, index) => {
                           return (
                              <TouchableOpacity key={index} style={[StyleDropdown.item, width ? { width: width } : { width: 120 }]}
                                 onPress={() => hanldeItem(tab)}>
                                 <Text>{tab.label}</Text>
                              </TouchableOpacity>
                           )
                        })
                     }
                  </View>
                  :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
      </View>
   )
}