import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { StylesPostScreens } from '../../assets/styles/postScreens'
import IconAntd from 'react-native-vector-icons/AntDesign'


import { FormPost } from '../../components/Post'
import { VALUE, UNIT_VALUE } from '../../contants'
import { asyncPostNewsStatus, asyncSendGmail } from '../../store/Post/action'
import { actPostSuccessed, actShowLoading, actHideLoading, } from '../../store/App/action'

export default function PostScreens() {
   const navigation = useNavigation()
   const dispatch = useDispatch();
   const user = useSelector(state => state.Auth.inforUserLogin)
   const [valuePrices, setValuePrices] = useState(UNIT_VALUE.THOA_THUAN)
   const [listImage, setListImage] = useState([])
   const [isShowModal, setisShowModal] = useState(false)
   const [isShowNotification, setIsNotification] = useState(false)
   const [formPost, setFormPost] = useState({
      title: "",
      address: "",
      content: "",
      prices: "",
      beds: "0",
      baths: "0",
      images: [],
      description: "",
      valueCurrent: VALUE.RENT,
      valueName: VALUE.APARTMENT,
      valueArea: "",
      unit: UNIT_VALUE.THOA_THUAN,
      phoneNumber: "",
      idUser: user && user._id,
      nameUser: user && user.fullname
   })
   useEffect(() => {
      if (valuePrices === UNIT_VALUE.THOA_THUAN) {
         setFormPost({ ...formPost, prices: "" })
      }
   }, [valuePrices === UNIT_VALUE.THOA_THUAN])
   const handleShowNotification = () => {
      setIsNotification(true)

   }
   const handleSubmitForm = () => {
      const {
         title,
         address,
         content,
         prices,
         beds,
         baths,
         images,
         description,
         valueCurrent,
         valueName,
         valueArea,
         unit,
         phoneNumber,
         idUser,
         nameUser } = formPost
      dispatch(asyncPostNewsStatus({
         title,
         address,
         content,
         prices,
         beds,
         baths,
         images,
         description,
         valueCurrent,
         valueName,
         valueArea,
         unit,
         phoneNumber,
         idUser,
         nameUser
      })).then((res) => {
         if (res.ok === true) {
            setFormPost({
               title: "",
               address: "",
               content: "",
               prices: "",
               beds: "0",
               baths: "0",
               images: [],
               description: "",
               valueCurrent: VALUE.RENT,
               valueName: VALUE.APARTMENT,
               valueArea: "",
               unit: UNIT_VALUE.THOA_THUAN,
               phoneNumber: "",
               idUser: user && user._id,
               nameUser: user && user.fullname
            })
            navigation.navigate('home')
            const dataAfterSuccess = res.data;
            const { price, adress, name_user, unit, phone, kind, _id } = dataAfterSuccess
            dispatch(asyncSendGmail({ price, adress, name_user, unit, phone, kind, _id }))
               .then((res) => {
                  if (res.ok) {
                     dispatch(actPostSuccessed())
                  }
               })
         }
      })
      setIsNotification(false);
   }
   const handleCancalNotification = () => {
      setIsNotification(false)
   }
   const handleCloseModal = () => {
      setisShowModal(false)
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
            setisShowModal(false)
            setFormPost({ ...formPost, images: [...formPost.images, { linkImage: data.url }] })
         })
         .catch(err => {
            alert("Err", err)
         })
   }
   const listProps = {
      formPost,
      listImage: formPost.images,
      isShowModal,
      setFormPost,
      valuePrices,
      setisShowModal,
      setValuePrices,
   }
   return (
      <View style={StylesPostScreens.container}>
         <View style={StylesPostScreens.header}>
            <Text style={StylesPostScreens.titleHeader}>Đăng Tin</Text>
            <TouchableOpacity style={StylesPostScreens.iconPost} onPress={handleShowNotification}>
               <Text style={StylesPostScreens.textSave}>Lưu</Text>
            </TouchableOpacity>
         </View>
         <ScrollView>
            <FormPost {...listProps} />
         </ScrollView>
         <Modal
            onBackdropPress={handleCloseModal}
            isVisible={isShowModal}
            style={StylesPostScreens.Modal}
            backdropOpacity={0.6}
         >
            <View style={StylesPostScreens.View_modal}>
               <TouchableOpacity style={StylesPostScreens.btn_option} onPress={takePhotoByCamera}>
                  <Image style={StylesPostScreens.image} source={require('../../assets/images/camera.png')} />
                  <Text>Camera</Text>
               </TouchableOpacity>
               <TouchableOpacity style={StylesPostScreens.btn_option} onPress={getImageFromGalley}>
                  <Image style={StylesPostScreens.image} source={require('../../assets/images/image.png')} />
                  <Text>Galley</Text>
               </TouchableOpacity>
            </View>
         </Modal>
         <Modal
            onBackdropPress={handleCancalNotification}
            isVisible={isShowNotification}
            style={{ alignItems: "center" }}
         >
            <View style={StylesPostScreens.ModalAlert}>
               <Text style={StylesPostScreens.TileModal}>Thông báo !</Text>
               <Text style={StylesPostScreens.contentModal}>Bạn có muốn đăng bài viết này không ? </Text>
               <View style={StylesPostScreens.controlModal}>
                  <TouchableOpacity style={StylesPostScreens.btn_cancel} onPress={handleCancalNotification}>
                     <Text style={StylesPostScreens.text_btn}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={StylesPostScreens.btn_ok} onPress={handleSubmitForm}>
                     <Text style={StylesPostScreens.text_btn}>OK</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
   )
}