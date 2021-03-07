import { StyleSheet } from 'react-native'


const StylesPostScreens = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 10
   },
   header: {
      width: "100%",
      height: 90,
      flexDirection: "row",
      alignItems: "center"
   },
   iconPost: {
      width: 40,
      height: 40,
      position: "absolute",
      right: "2%",
      justifyContent: "center",
      alignItems: "center"
   },
   titleHeader: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#2d3436",
   },
   iconHeader: {
      position: "absolute",
      left: "33%",
      color: "#34495e"
   },
   View_modal: {
      width: "100%",
      height: 150,
      backgroundColor: "#fff",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   Modal: {
      justifyContent: "flex-end",
      margin: 0
   },
   image: {
      width: 45,
      height: 45
   },
   btn_option: {
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   ModalAlert: {
      width: "90%",
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10
   },
   TileModal: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center"
   },
   contentModal: {
      fontSize: 14,
      textAlign: "center",
      marginTop: 20,
      color: "#636e72"
   },
   controlModal: {
      flexDirection: "row",
      width: "100%",
      height: 50,
      marginTop: 20,
      alignItems: "center",
      justifyContent: "space-around",
      borderTopColor: "#bdc3c7",
      borderTopWidth: 0.5
   },
   text_btn: {
      color: "#636e72"
   },
   btn_cancel: {
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   btn_ok: {
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
   textSave: {
      color: "#3498db",
      fontWeight: "bold"
   }
})

export default StylesPostScreens