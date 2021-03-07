import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import NumberFormat from 'react-number-format';

import { StylesFormPost } from '../../assets/styles/PostStyle'
import Icon from 'react-native-vector-icons/AntDesign'

import DropDownTin from '../../components/Dropdown'
import { UNIT_VALUE, VALUE } from '../../contants'


export default function FormPost({
   formPost,
   listImage,
   setFormPost,
   valuePrices,
   setValuePrices,
   isShowModal,
   setisShowModal
}) {

   useEffect(() => {
      if (formPost.prices.length >= 8 && formPost.prices.length <= 11) {
         setFormPost({ ...formPost, unit: UNIT_VALUE.TRIEU })
      }
      else if (formPost && formPost.prices.length >= 12) {
         setFormPost({ ...formPost, unit: UNIT_VALUE.TY })
      }
      else if (formPost && formPost.prices.length >= 4 && formPost.prices.length <= 7) {
         setFormPost({ ...formPost, unit: UNIT_VALUE.NGHIN })
      }
      else if (formPost && formPost.prices.length < 4 && formPost.prices.length >= 1) {
         setFormPost({ ...formPost, unit: "" })
      }
      else {
         setFormPost({ ...formPost, unit: UNIT_VALUE.THOA_THUAN })
      }
   }, [formPost.prices, formPost.valuePrices])

   const itemValue = [
      { label: VALUE.RENT, value: VALUE.RENT },
      { label: VALUE.BUY, value: VALUE.BUY },
   ]
   const itemName = [
      { label: VALUE.APARTMENT, value: VALUE.APARTMENT },
      { label: VALUE.LAND, value: VALUE.LAND },
   ]
   const itemHome = [
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
   ]
   const itemPrices = [
      { label: UNIT_VALUE.THOA_THUAN, value: UNIT_VALUE.THOA_THUAN },
      { label: "Giá cụ thể", value: "Nhập giá cụ thể" },
   ]
   const handleSelectImage = () => {
      setisShowModal(true)
   }
   return (
      <View style={StylesFormPost.formPost}>

         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Tiêu đề:</Text>
            <TextInput
               value={formPost.title}
               style={StylesFormPost.input}
               placeholder="Tên dự án ...."
               onChangeText={text => setFormPost({ ...formPost, title: text })}
            />
         </View>
         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Địa chỉ:</Text>
            <TextInput
               value={formPost.address}
               style={StylesFormPost.input}
               placeholder="Địa chỉ ...."
               onChangeText={text => setFormPost({ ...formPost, address: text })}
            />
         </View>
         <View style={StylesFormPost.itemForm}>
            <View style={StylesFormPost.FormHorizanto}>
               <View style={StylesFormPost.formLeft}>
                  <Text style={StylesFormPost.nameLabel}>Hình Thức:</Text>
                  <DropDownTin
                     itemDropdown={itemValue}
                     valueDefault={formPost.valueCurrent}
                     onChangeValue={(value) => setFormPost({ ...formPost, valueCurrent: value })}
                  />
               </View>
               <View style={StylesFormPost.formRight}>
                  <Text style={StylesFormPost.nameLabel}>Thể loại:</Text>
                  <DropDownTin
                     itemDropdown={itemName}
                     valueDefault={formPost.valueName}
                     onChangeValue={(value) => setFormPost({ ...formPost, valueName: value })}
                  />
               </View>
            </View>
         </View>
         <View style={StylesFormPost.itemForm}>
            <View style={StylesFormPost.FormHorizantoTienIch}>
               {
                  formPost.valueName && formPost.valueName !== VALUE.LAND ?
                     <>
                        <View style={StylesFormPost.formBed}>
                           <DropDownTin
                              width={40}
                              itemDropdown={itemHome}
                              valueDefault={formPost.beds}
                              onChangeValue={text => setFormPost({ ...formPost, beds: text })}
                           />
                           <Text style={StylesFormPost.nameBed}>Beds</Text>
                        </View>
                        <View style={StylesFormPost.formBed}>
                           <DropDownTin
                              width={40}
                              itemDropdown={itemHome}
                              valueDefault={formPost.baths}
                              onChangeValue={text => setFormPost({ ...formPost, baths: text })}
                           />
                           <Text style={StylesFormPost.nameBed}>Baths</Text>
                        </View>
                     </>
                     :
                     <Text style={{ display: "none" }}></Text>
               }
               <View style={StylesFormPost.formBed}>
                  <TextInput
                     value={formPost.valueArea}
                     onChangeText={text => setFormPost({ ...formPost, valueArea: text })}
                     keyboardType={'numeric'}
                     style={[StylesFormPost.input, formPost.valueName && formPost.valueName !== VALUE.LAND ? { width: 70 } : { width: 280 }]}
                     placeholder="..."
                     numberOfLines={1}
                  />
                  <Text style={StylesFormPost.nameBed}>Area(m2)</Text>
               </View>
            </View>
         </View>
         <View style={StylesFormPost.itemForm}>
            <View style={StylesFormPost.PricesText}>
               <Text style={[StylesFormPost.nameLabel, { marginRight: 10 }]}>Giá:</Text>
               <DropDownTin
                  itemDropdown={itemPrices}
                  valueDefault={valuePrices}
                  onChangeValue={(value) => setValuePrices(value)}
               />
            </View>
            {
               valuePrices === UNIT_VALUE.THOA_THUAN ?
                  <Text style={{ display: "none" }}></Text>
                  :
                  <>
                     <NumberFormat
                        value={formPost.prices}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={value => <TextInput
                           value={value}
                           keyboardType={'numeric'}
                           style={StylesFormPost.input}
                           placeholder="Giá ...."
                           onChangeText={text => {
                              setFormPost({
                                 ...formPost,
                                 prices: text.toLocaleString('vi', { style: 'currency', currency: 'VND' })
                              })
                           }}
                        />}
                     />
                     <Text style={StylesFormPost.VND}>
                        {`${formPost.unit}/VNĐ`}
                     </Text>
                  </>
            }
         </View>
         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Hình ảnh:</Text>
            <TouchableOpacity style={StylesFormPost.btn_SelectFile} onPress={handleSelectImage}>
               <Text style={StylesFormPost.text_btn}>Chọn hình ảnh</Text>
               <Icon style={StylesFormPost.icon_btn} name="upload" />
            </TouchableOpacity>
            {
               listImage && listImage.toString() !== "" ?
                  <View style={StylesFormPost.formImage}>
                     <FlatList
                        horizontal
                        data={listImage}
                        keyExtractor={index => Math.random().toString()}
                        renderItem={({ item, index }) => {
                           return (
                              <Image key={index} style={StylesFormPost.imageUpload} source={{ uri: item.linkImage }} />
                           )
                        }}
                     />
                  </View>
                  :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Số điện thoại (Liên hệ):</Text>
            <TextInput
               value={formPost.phoneNumber}
               style={StylesFormPost.input}
               placeholder="Số điện thoại ...."
               onChangeText={text => setFormPost({ ...formPost, phoneNumber: text })}
            />
         </View>
         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Tiện ích:</Text>
            <TextInput
               value={formPost.description}
               multiline={true}
               style={[StylesFormPost.input, { height: 150 }]}
               placeholder="Tiện ích ...."
               onChangeText={text => setFormPost({ ...formPost, description: text })}
            />
         </View>
         <View style={StylesFormPost.itemForm}>
            <Text style={StylesFormPost.nameLabel}>Mô tả (Nội dung):</Text>
            <TextInput
               multiline={true}
               value={formPost.content}
               style={[StylesFormPost.input, { height: 150 }]}
               placeholder="Mô tả ...."
               onChangeText={text => setFormPost({ ...formPost, content: text })}
            />
         </View>
      </View >
   )
}