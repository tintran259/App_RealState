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
               <Text style={StylesRegister.titleHeader}>????ng k??</Text>
               <TouchableOpacity style={StylesRegister.btnRegister} onPress={handleSubmitRegiser}>
                  <Text style={StylesRegister.textRegister}>L??u</Text>
               </TouchableOpacity>
            </View>
         </View>
         <View style={StylesRegister.FormRegister}>
            <View style={StylesRegister.headerForm}>
               <Image style={StylesRegister.avatar} source={{ uri: formRegister.image }} />
               <Text style={StylesRegister.textChange}>Thay ?????i ???nh </Text>
            </View>
            <View style={StylesRegister.bodyForm}>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>H??? v?? t??n</Text>
                  <TextInput
                     value={formRegister.fullname}
                     onChangeText={text => setFormRegister({ ...formRegister, fullname: text })}
                     placeholder="H??? t??n ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.fullname === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>M???i b???n nh???p h??? v?? t??n</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }
               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>T??i kho???n</Text>
                  <TextInput
                     value={formRegister.username}
                     onChangeText={text => setFormRegister({ ...formRegister, username: text })}
                     placeholder="T??i Kho???n ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.username === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>M???i b???n nh???p t??i kho???n</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }

               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>M???t kh???u</Text>
                  <TextInput
                     value={formRegister.password}
                     onChangeText={text => setFormRegister({ ...formRegister, password: text })}
                     placeholder="M???t kh???u ..."
                     secureTextEntry={true}
                     style={[StylesRegister.input, isOnPressCreate && formRegister.password === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>M???i b???n nh???p m???t kh???u</Text>
                        :
                        <Text style={{ display: "none" }}></Text>
                  }

               </View>
               <View style={StylesRegister.inputForm}>
                  <Text style={StylesRegister.label}>Nh???p l???i m???t kh???u</Text>
                  <TextInput
                     secureTextEntry={true}
                     value={formRegister.rePassword}
                     onChangeText={text => setFormRegister({ ...formRegister, rePassword: text })}
                     placeholder="Nh???p l???i m???t kh???u ..."
                     style={[StylesRegister.input, isOnPressCreate && formRegister.rePassword === "" ? { borderBottomColor: "#e74c3c" } : ""]}></TextInput>
                  {
                     isOnPressCreate && formRegister.fullname === "" ?
                        <Text style={StylesRegister.textEmpty}>M???i b???n nh???p l???i m???t kh???u</Text>
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
                  <Text style={StylesRegister.titleOops}>Th??nh c??ng</Text>
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
                  <Text style={StylesRegister.titleOops}>T??i kho???n ???? t???n t???i</Text>
               </View>
               <TouchableOpacity style={StylesRegister.btnOk} onPress={handleCloseModal}>
                  <Text style={StylesRegister.textModalS}>OK</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}