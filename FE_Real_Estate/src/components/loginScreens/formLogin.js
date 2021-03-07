import React, { useEffect, useState } from 'react'
import {
   View,
   TextInput,
   Text,
   TouchableOpacity,
   Image
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'

import IconEvil from 'react-native-vector-icons/EvilIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import stylesFormLogin from '../../assets/styles/formLogin.style'
import { StyleModalSuccessed } from '../../assets/styles/ModalStyle'

import { asyncLoginForm, actLoginSuccess } from '../../store/Login/action'



export default function FormLogin() {
   const navigation = useNavigation()
   const dispatch = useDispatch()

   const [formLogin, setFormLogin] = useState({
      username: "",
      password: ""
   })

   const [isShowPass, setIsShowPass] = useState(true)


   const [isUsernameEmpty, setIsUsernameEmpty] = useState(false)
   const [isOnPressLogin, setIsOnPressLogin] = useState(false)
   const [isVisible, setIsvisible] = useState(false)
   const [isWrongPass, setIsWrongPass] = useState(false)

   const handleShowPass = () => {
      setIsShowPass(false)
   }
   const handleHidePass = () => {
      setIsShowPass(true)
   }
   const handleRegister = () => {
      navigation.navigate('Register')
   }
   const handleBackdrop = () => {
      setIsvisible(false)
   }
   const validateForm = () => {
      if (formLogin.username.trim(" ") === "" && formLogin.password.trim(" ") === "") {
         return false
      }
      else if (formLogin.username.trim(" ") === "") {
         return false
      }
      else if (formLogin.password.trim(" ") === "") {
         return false
      }
      return true
   }

   const handleBackdropWrong = () => {
      setIsWrongPass(false)
   }

   const hanldeSubmit = () => {
      setIsOnPressLogin(true)
      if (validateForm()) {
         const { username, password } = formLogin;
         dispatch(asyncLoginForm({ username, password }))
            .then((res) => {
               const dataUser = res.res;
               if (res.ok === true) {
                  setIsvisible(true)
                  dispatch(actLoginSuccess(dataUser))
               } else {
                  setIsWrongPass(true)
               }
            })
      }
   }
   //=====================================State
   //===============================Render
   return (
      <View style={stylesFormLogin.body}>
         <View style={[stylesFormLogin.Formlogin, { marginBottom: 40 }]}>
            <IconFeather name="user" style={stylesFormLogin.icon} />
            <TextInput
               style={[stylesFormLogin.input, isOnPressLogin && formLogin.username === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               placeholder="Tài khoản ..."
               value={formLogin.username}
               onChangeText={text => setFormLogin({ ...formLogin, username: text })}
            />
            {
               isOnPressLogin && formLogin.username === "" ?
                  <Text style={stylesFormLogin.textEmpty}>Mời bạn nhập tài khoản </Text>
                  :
                  <Text style={{ display: "none" }}></Text>
            }
         </View>
         <View style={[stylesFormLogin.Formlogin, { marginBottom: 10 }]}>
            <IconFeather name="lock" style={[stylesFormLogin.icon]} />
            <TextInput
               style={[stylesFormLogin.input, isOnPressLogin && formLogin.password === "" ? { borderBottomColor: "#e74c3c" } : ""]}
               secureTextEntry={isShowPass}
               placeholder="Mật khẩu ..."
               value={formLogin.password}
               onChangeText={text => setFormLogin({ ...formLogin, password: text })}
            />
            {
               isOnPressLogin && formLogin.password === "" ?
                  <Text style={stylesFormLogin.textEmpty}>Mời bạn nhập mật khẩu </Text>
                  :
                  <Text style={{ display: "none" }}></Text>
            }
            {
               isShowPass ?
                  <TouchableOpacity style={stylesFormLogin.iconShowHidePass} onPress={handleShowPass}>
                     <IconFeather style={stylesFormLogin.iconshowPass} name="eye-off" />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={stylesFormLogin.iconShowHidePass} onPress={handleHidePass}>
                     <IconFeather style={stylesFormLogin.iconshowPass} name="eye" />
                  </TouchableOpacity>
            }
         </View>
         {
            isUsernameEmpty ?
               <Text style={{ fontStyle: "italic", color: "#e74c3c" }}> Vui lòng nhập tài khoản !</Text>
               :
               <Text></Text>
         }
         <View style={stylesFormLogin.for}>
            <TouchableOpacity style={stylesFormLogin.forgotPass}>
               <Text style={stylesFormLogin.textForgot}>Forgot password ?</Text>
            </TouchableOpacity>
         </View>
         <View style={stylesFormLogin.footer}>
            <View style={stylesFormLogin.sigin}>
               <TouchableOpacity onPress={hanldeSubmit} style={stylesFormLogin.btnSignIn}>
                  <Text style={stylesFormLogin.textBtn}>Sign in</Text>
               </TouchableOpacity>
               <TouchableOpacity style={stylesFormLogin.btnFacebook}>
                  <IconEvil style={stylesFormLogin.logoFB} name="sc-facebook" />
               </TouchableOpacity>
               <TouchableOpacity style={stylesFormLogin.btnGmail}>
                  <IconEvil style={stylesFormLogin.logoFB} name="sc-google-plus" />
               </TouchableOpacity>
            </View>
            <Text style={stylesFormLogin.or}>-------------------- or ----------------------</Text>
            <TouchableOpacity onPress={handleRegister} style={stylesFormLogin.btnSignUp}>
               <Text style={stylesFormLogin.textBtn}>Sign up</Text>
            </TouchableOpacity>
         </View>
         <Modal
            animationIn="shake"
            animationInTiming={1000}
            animationOut="zoomOut"
            animationOutTiming={1000}
            style={{ flexDirection: "column", alignItems: "center" }}
            isVisible={isWrongPass}
            backdropOpacity={0.3}
            onBackdropPress={handleBackdropWrong}
         >
            <View style={StyleModalSuccessed.viewWrongPass}>
               <Image style={StyleModalSuccessed.IMAGE} source={require('../../assets/images/abuse.png')} />
               <Text style={StyleModalSuccessed.textWrong}>uh-no... !</Text>
               <Text style={StyleModalSuccessed.textMay}>Sai toàn khoản hoặc mật khẩu !</Text>
               <TouchableOpacity
                  onPress={handleBackdropWrong}
                  style={StyleModalSuccessed.btn_try}>
                  <Text style={StyleModalSuccessed.textTry}> Thử lại</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   )
}