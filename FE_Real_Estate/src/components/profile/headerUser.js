import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-native-modal'


import Icon from 'react-native-vector-icons/AntDesign'
import stylesProfile from '../../assets/styles/profile.style'

import { actLogout } from '../../store/Login/action'
import { TextInput } from 'react-native-gesture-handler';

export default function HeaderUser({ navigation }) {

   const dispatch = useDispatch()
   const [isShowPopover, setIsShowPopover] = useState(false)
   const [isShowModalPass, setIsShowModalPass] = useState(false)
   const [isLoginPass, setIsLoginPass] = useState(false)
   const [chose1, setChose1] = useState(false)
   const [password, setPassword] = useState("")
   const user = useSelector(state => state.Auth.inforUserLogin)

   console.log('====================================');
   console.log("user", user);
   console.log('====================================');
   const handleLogout = () => {
      setIsShowPopover(false)
      setIsLoginPass(false)
      dispatch(actLogout())
   }
   const handleOpenPopover = () => {
      setIsShowPopover(true)
   }
   const handleClosePopover = () => {
      setIsShowPopover(false)
      setIsShowModalPass(false)
   }
   const handleEditProfile = () => {
      setChose1(true)
      if (isLoginPass) {
         setIsShowPopover(false)
         navigation.navigate('ProfileEdit')
      } else {
         setIsShowModalPass(true)
         setIsShowPopover(false)
      }
   }
   const handleChangePass = () => {
      setChose1(false)
      if (isLoginPass) {
         setIsShowPopover(false)
         navigation.navigate('ChangePassword')
      } else {
         setIsShowModalPass(true)
         setIsShowPopover(false)
      }
   }

   const handleSubmitPass = () => {
      if (password === user.password) {
         setIsShowModalPass(false)
         setPassword("")
         setIsLoginPass(true)
         if (chose1) {
            navigation.navigate('ProfileEdit')
         } else {
            navigation.navigate('ChangePassword')
         }
      }
      else {
         alert('fail')
      }
   }
   return (
      <>
         <View style={stylesProfile.header}>
            <Image style={stylesProfile.bgBia} source={{ uri: "https://vtv1.mediacdn.vn/2018/11/22/photo-1-15428716087751533429090.jpg" }} />
            <View style={stylesProfile.dialogBG}></View>
         </View>
         <View style={stylesProfile.body}>
            <View style={stylesProfile.viewAvatar}>
               <Image style={stylesProfile.avatar} source={
                  user && user.img ?
                     { uri: user && user.img }
                     :
                     { uri: "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" }
               } />
               <TouchableOpacity style={stylesProfile.eidtUser} onPress={handleOpenPopover} >
                  <Icon name="ellipsis1" size={25} style={stylesProfile.iconEdit} />
               </TouchableOpacity>
               <Modal
                  style={stylesProfile.Modal}
                  isVisible={isShowPopover}
                  onBackdropPress={handleClosePopover}
                  backdropOpacity={0.6}
               >
                  <View style={stylesProfile.contentPopovertext}>
                     <TouchableOpacity style={stylesProfile.btnEdit} onPress={handleEditProfile}>
                        <Icon name="edit" style={stylesProfile.iconEditProfile} />
                        <Text style={stylesProfile.textEditProfile}>Edit Profile</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={stylesProfile.btnChangePassword} onPress={handleChangePass}>
                        <Icon size={16} name="lock" style={stylesProfile.iconEditProfile} />
                        <Text style={stylesProfile.textEditProfile}>Change Password</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={stylesProfile.btnLogout} onPress={handleLogout}>
                        <Icon size={16} name="logout" style={stylesProfile.iconLogout} />
                        <Text style={stylesProfile.textLogout}>Log out</Text>
                     </TouchableOpacity>
                  </View>
               </Modal>
               <Modal
                  isVisible={isShowModalPass}
                  onBackdropPress={handleClosePopover}
                  backdropOpacity={0.3}
                  style={{ alignItems: "center" }}
               >
                  <View style={stylesProfile.formPassword}>
                     <Text style={stylesProfile.textW}>Sign In to EditProfile or Change password</Text>
                     <Text style={stylesProfile.titlePass}>{`Enter password for "${user && user.username}"`}</Text>
                     <TextInput
                        secureTextEntry
                        style={stylesProfile.inputpass}
                        value={password}
                        onChangeText={text => setPassword(text)}
                     />
                     <View style={stylesProfile.optionBtn}>
                        <TouchableOpacity style={stylesProfile.btnCancel} onPress={handleClosePopover}>
                           <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesProfile.btnCancel} onPress={handleSubmitPass}>
                           <Text>OK</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </Modal>
            </View>
            <View style={stylesProfile.titleUser}>
               <Text style={stylesProfile.nameUser}>{user && user.fullname}</Text>
               <View style={stylesProfile.flow}>
               </View>
            </View>
         </View>
      </>
   )
}