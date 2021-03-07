import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/native'

import IconAntd from 'react-native-vector-icons/AntDesign'
import { asyncRegister } from '../../store/Login/action'

import { StylesRegister } from '../../assets/styles/Register'
export default function RegisterScreens() {
   const navigation = useNavigation()
   const dispatch = useDispatch();
   const [formRegister, setFormRegister] = useState({
      image: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
      fullname: "",
      username: "",
      password: "",
      rePassword: "",
   })
   const [isShowModal, setIsShowModal] = useState(false)
   const [isShowModalFail, setIsShowModalFail] = useState(false)
   const [isOnPressCreate, setIsOnPressCreate] = useState(false)
   const handleBack = () => {
      navigation.goBack();
   }
   const handleChangeAvatar = () => {
      setFormRegister({
         ...formRegister,
         image: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
      })
   }
   const validate = (fullname, username, password) => {
      if (password.trim("") === "") {
         return false
      }
      else if (fullname.trim("") === "") {
         return false
      }
      else if (username.trim("") === "") {
         return false
      }
      else if (formRegister.rePassword.trim("") === "") {
         return false
      }
      else if (password.trim("") !== formRegister.rePassword.trim("")) {
         return false
      }
      return true
   }
   const handleSubmitRegiser = () => {
      setIsOnPressCreate(true)
      const { fullname, username, password, image } = formRegister
      if (validate(fullname, username, password)) {
         dispatch(asyncRegister({ username, password, fullname, image }))
            .then((res) => {
               if (res.ok) {
                  setIsShowModal(true)
                  setTimeout(() => {
                     setIsShowModal(false)
                     navigation.navigate('Login')
                  }, 2000)
               } else {
                  setIsShowModalFail(true)
               }
            })
      }
   }
   const handleCloseModal = () => {
      setIsShowModalFail(false)
   }
   return (
      <View style={StylesRegister.container}>
         <View style={StylesRegister.header}>
            <TouchableOpacity style={StylesRegister.btnBack} onPress={handleBack}>
               <IconAntd style={StylesRegister.iconBack} name="arrowleft" size={25} />
            </TouchableOpacity>
            <View style={StylesRegister.vIEWHeader}>
               <Text style={StylesRegister.titleHeader}>Đăng ký</Text>
               <TouchableOpacity style={StylesRegister.btnRegister} onPress={handleSubmitRegiser}>
                  <Text style={StylesRegister.textRegister}>Lưu</Text>
               </TouchableOpacity>
            </View>
         </View>
         <View style={StylesRegister.FormRegister}>
            <View style={StylesRegister.headerForm}>
               <Image style={StylesRegister.avatar} source={{ uri: formRegister.image }} />
               <Text style={StylesRegister.textChange}>Thay đổi ảnh </Text>
            </View>
            <View style={StylesRegister.bodyForm}>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>Họ và tên</Text>
                  <TextInput
                     value={formRegister.fullname}
                     onChangeText={text => setFormRegister({ ...formRegister, fullname: text })}
                     placeholder="Họ tên ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.fullname === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>Mời bạn nhập họ và tên</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>Tài khoản</Text>
                  <TextInput
                     value={formRegister.username}
                     onChangeText={text => setFormRegister({ ...formRegister, username: text })}
                     placeholder="Tài Khoản ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.username === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>Mời bạn nhập tài khoản</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }

               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>Mật khẩu</Text>
                  <TextInput
                     value={formRegister.password}
                     onChangeText={text => setFormRegister({ ...formRegister, password: text })}
                     placeholder="Mật khẩu ..."
                     secureTextEntry={true}
                     style={[StylesRegister.input, isOnPressCreate && formRegister.password === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>Mời bạn nhập mật khẩu</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }

               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>Nhập lại mật khẩu</Text>
                  <TextInput
                     secureTextEntry={true}
                     value={formRegister.rePassword}
                     onChangeText={text => setFormRegister({ ...formRegister, rePassword: text })}
                     placeholder="Nhập lại mật khẩu ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.rePassword === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>Mời bạn nhập lại mật khẩu</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }

               </View>
            </View>

         </View>
         <Modal
            style={{ alignItems: "center" }}
            isVisible={isShowModal}
            onBackdropPress={handleCloseModal}
         >
            <View style={StylesRegister.modal}>
               <View style={StylesRegister.headerModal}>
                  <Text style={StylesRegister.titleOops}>Thành công</Text>
               </View>
               <TouchableOpacity style={StylesRegister.btnOk} onPress={handleCloseModal}>
                  <Text style={StylesRegister.textModalS}>OK</Text>
               </TouchableOpacity>
            </View>
         </Modal>
         <Modal
            style={{ alignItems: "center" }}
            isVisible={isShowModalFail}
         >
            <View style={StylesRegister.modal}>
               <View style={StylesRegister.headerModal}>
                  <Text style={StylesRegister.titleOops}>Tài khoản đã tồn tại</Text>
               </View>
               <TouchableOpacity style={StylesRegister.btnOk} onPress={handleCloseModal}>
                  <Text style={StylesRegister.textModalS}>OK</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}