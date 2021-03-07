import { StyleSheet } from 'react-native'


const StylesProfileEdit = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: "5%"
   },
   header: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "space-between"
   },
   btnBack: {
      width: 50,
      height: 40,
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: 10
   },
   btnCheck: {
      width: 50,
      height: 40,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10
   },
   arrowBack: {
      fontSize: 20
   },
   body: {
      width: "100%",
      height: "100%",
   },
   avatarUser: {
      width: "100%",
      height: 150,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end"
   },
   avatar: {
      width: 120,
      height: 120,
      borderRadius: 15,
   },
   btnCamera: {
      width: 50,
      height: 50,
      position: "absolute",
      right: "20%",
      justifyContent: "flex-end",
      alignItems: "flex-end"
   },
   changeInput: {
      width: "100%",
      height: "100%",
      padding: 10
   },
   inputFullname: {
      width: "100%",
      marginTop: 20
   },
   titleLabel: {
      fontWeight: "bold",
      letterSpacing: 1,
      color: "#636e72"
   },
   input: {
      borderWidth: 1,
      width: "100%",
      height: 40,
      borderRadius: 10,
      marginTop: 5,
      borderColor: "#bdc3c7",
      paddingLeft: 10,
      paddingRight: 10,
      color: "#636e72"
   },
   modalCamera: {
      justifyContent: "flex-end",
      margin: 0
   },
   CameraView: {
      width: "100%",
      height: 120,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   },
   option: {
      justifyContent: "center",
      alignItems: "center",
      width: 150,
   },
   img: {
      width: 40,
      height: 40
   },
   textOption: {
      color: "#636E72",
      fontSize: 13
   }
})

export default StylesProfileEdit