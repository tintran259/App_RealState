import React, { useState } from 'react'
import { View, Text, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-native-modal'
import ImagePicker from 'react-native-image-crop-picker';

import { StyleProfileEdit } from '../../assets/styles/profileEdit'
import { actHideLoading, actShowLoading } from '../../store/App/action'
import IconAntd from 'react-native-vector-icons/AntDesign'


import { asyncChangeInforUser, asyncChangeAvatarUser } from '../../store/User/action'

export default function ProfileEdit({ navigation }) {
   const dispatch = useDispatch()
   const user = useSelector(state => state.Auth.inforUserLogin)


   const [inforUser, setInforUser] = useState({
      id: user && user._id,
      fullname: user && user.fullname,
      image: user && user.img,
      password: user && user.password,
      account: user && user.username
   })
   const [isShow, setIsShoW] = useState(false)


   const handleBack = () => {
      navigation.goBack();
   }
   const hanldeSubmit = () => {
      console.log('====================================');
      console.log("dasdsad", inforUser);
      console.log('====================================');
      const { id, fullname, image, password, account } = inforUser
      dispatch(asyncChangeInforUser({ id, fullname, image, password, account }))
         .then((res) => {
            if (res.ok) {
               //navigation.goBack()
               dispatch(asyncChangeAvatarUser({ id, image }))
            }
         })
   }
   const handleCamera = () => {
      setIsShoW(true)
   }
   const handleCloseModal = () => {
      setIsShoW(false)
   }
   const takePhotoByCamera = () => {
      ImagePicker.openCamera({
         width: 300,
         height: 400,
         cropping: true,
      })
         .then(image => {
            let newFile = {
               uri: image.path,
               type: image.mime,
               name: `test.${image.path.split(".")[1]}`,
            }
            handleUploadImage(newFile)
         });
   }
   const getImageFromGalley = () => {
      ImagePicker.openPicker({
         width: 300,
         height: 400,
         cropping: true,
         multiple: true
      }).then(images => {
         images && images.map((item) => {
            let newFile = {
               uri: item.path,
               type: item.mime,
               name: `test.${item.path.split(".")[1]}`,
            }
            handleUploadImage(newFile)
         })

      });
   }
   const handleUploadImage = (photo) => {
      const data = new FormData();
      data.append('file', photo)
      data.append("upload_preset", "ImageRealEstate")
      data.append('cloud_name', 'dhirc0ajt')
      dispatch(actShowLoading())
      fetch("https://api.cloudinary.com/v1_1/dhirc0ajt/image/upload",
         {
            method: "POST",
            body: data,
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'multipart/form-data'
            }
         }).then(res => res.json())
         .then(data => {
            dispatch(actHideLoading())
            setIsShoW(false)
            setInforUser({ ...inforUser, image: data.url })
         })
         .catch(err => {
            alert("Err", err)
         })
   }
   return (
      <View style={StyleProfileEdit.container}>
         <StatusBar barStyle="dark-content" translucent backgroundColor="#55efc400" />
         <View style={StyleProfileEdit.header}>
            <TouchableOpacity style={StyleProfileEdit.btnBack} onPress={handleBack}>
               <IconAntd name="arrowleft" style={StyleProfileEdit.arrowBack} />
            </TouchableOpacity>
            <TouchableOpacity style={StyleProfileEdit.btnCheck} onPress={hanldeSubmit}>
               <IconAntd name="check" style={StyleProfileEdit.arrowBack} />
            </TouchableOpacity>
         </View>
         <View style={StyleProfileEdit.body}>
            <View style={StyleProfileEdit.avatarUser}>
               <Image style={StyleProfileEdit.avatar} source={{ uri: `${inforUser.image}` }} />
               <TouchableOpacity style={StyleProfileEdit.btnCamera} onPress={handleCamera}>
                  <IconAntd size={30} color="#7f8c8d" name="camerao" />
               </TouchableOpacity>
            </View>
            <View style={StyleProfileEdit.changeInput}>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Họ và tên</Text>
                  <TextInput
                     style={StyleProfileEdit.input}
                     value={inforUser.fullname}
                     onChangeText={text => setInforUser({ ...inforUser, fullname: text })}
                  />
               </View>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Mật khẩu mới</Text>
                  <TextInput
                     style={StyleProfileEdit.input}
                     value={inforUser.password}
                     onChangeText={text => setInforUser({ ...inforUser, password: text })}
                  />
               </View>
               <View style={StyleProfileEdit.inputFullname}>
                  <Text style={StyleProfileEdit.titleLabel}>Nhập lại mật khẩu mới</Text>
                  <TextInput
                     style={StyleProfileEdit.input}
                  />
               </View>
            </View>
            <Modal
               style={StyleProfileEdit.modalCamera}
               isVisible={isShow}
               onBackdropPress={handleCloseModal}
            >
               <View style={StyleProfileEdit.CameraView}>
                  <TouchableOpacity style={StyleProfileEdit.option} onPress={takePhotoByCamera}>
                     <Image style={StyleProfileEdit.img} source={require('../../assets/images/camera.png')} />
                     <Text style={StyleProfileEdit.textOption}>Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StyleProfileEdit.option} onPress={getImageFromGalley}>
                     <Image style={StyleProfileEdit.img} source={require('../../assets/images/image.png')} />
                     <Text style={StyleProfileEdit.textOption}>Galley</Text>
                  </TouchableOpacity>
               </View>
            </Modal>
         </View>
      </View>
   )
}