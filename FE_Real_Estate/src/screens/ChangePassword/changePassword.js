import React, { useState } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { StyleProfileEdit } from '../../assets/styles/profileEdit'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { asyncChangePassword } from '../../store/User/action'
export default function ChangePassword({ navigation }) {
   const dispatch = useDispatch()
   const [formPass, setFormPass] = useState({
      password: "",
      newPassword: "",
      rePassword: ""
   })
   const handleBack = () => {
      navigation.goBack();
   }
   const hanldeSubmit = () => {
      console.log("hanldeSubmit", formPass);
      const { password, newPassword } = formPass
      dispatch(asyncChangePassword({ password, newPassword }))
   }
   return (
      <View style={StyleProfileEdit.container}>
         <View style={StyleProfileEdit.header}>
            <TouchableOpacity style={StyleProfileEdit.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" style={StyleProfileEdit.arrowBack} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleProfileEdit.btnCheck} onPress={hanldeSubmit}>
               <IconAntd name="check" style={StyleProfileEdit.arrowBack} />
            </TouchableOpacity>
         </View>
         <StatusBar barStyle="dark-content" translucent backgroundColor="#55efc400" />
         <View style={StyleProfileEdit.body}>
            <View style={StyleProfileEdit.changeInput}>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Mật khẩu</Text>
                  <TextInput style={StyleProfileEdit.input}
                     value={formPass.password}
                     onChangeText={text => setFormPass({ ...formPass, password: text })}
                  />
               </View>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Mật khẩu mới</Text>
                  <TextInput style={StyleProfileEdit.input}
                     value={formPass.newPassword}
                     onChangeText={text => setFormPass({ ...formPass, newPassword: text })}
                  />
               </View>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Nhập lại mật khẩu</Text>
                  <TextInput style={StyleProfileEdit.input}
                     value={formPass.rePassword}
                     onChangeText={text => setFormPass({ ...formPass, rePassword: text })}
                  />
               </View>
            </View>
         </View>
      </View>
   )
}