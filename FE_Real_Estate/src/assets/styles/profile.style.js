import { StyleSheet } from 'react-native'

const stylesProfile = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#ecf0f1"
   },
   header: {
      width: "100%",
      height: 250,
      backgroundColor: "pink",
      position: "relative"
   },
   dialogBG: {
      position: "absolute",
      width: "100%",
      height: 250,
      backgroundColor: "#95a5a65c",
      zIndex: 2
   },
   bgBia: {
      width: "100%",
      height: 250,
   },
   body: {
      width: "100%",
      height: 100,
      marginTop: "-5%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   avatar: {
      width: 120,
      height: 120,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#fff",
      marginTop: "-20%"
   },
   viewAvatar: {
      flexDirection: "row",
      justifyContent: "center",
      position: "relative"
   },
   iconEdit: {
      width: 50,
      height: 40,
   },
   nameUser: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
      textTransform: "capitalize",
      color: "#2d3436"
   },
   addrestUser: {
      textAlign: "center",
      textTransform: "capitalize"
   },
   flow: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10
   },
   flower: {
      width: 100,
      height: 80,
   },
   textNum: {
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "bold",
      fontSize: 16
   },
   textFlow: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16
   },
   listUserPost: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 20,
      color: "#2d3436"
   },
   listUser: {
      padding: 20,
      width: "100%",
   },
   cardPostUser: {
      width: "100%",
      height: 200,
      backgroundColor: "#fff",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#dfe6e9"
   },
   titleUser: {
      flexDirection: "column",
      alignItems: "center"
   },
   eidtUser: {
      width: 40,
      height: 50,
      position: "absolute",
      top: "40%",
      right: 0,
   },
   empty: {
      width: "100%",
      height: 200,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   btn_empty: {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      borderColor: "#7f8c8d",
   },
   textBtn: {
      color: "#7f8c8d"
   },
   titleEmpty: {
      color: "#7f8c8d",
      textAlign: "center"
   },
   arrow: {
      marginTop: -37
   },
   contentPopovertext: {
      width: "100%",
      height: 150,
      backgroundColor: "#fff",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 20
   },
   btnEdit: {
      width: "100%",
      height: "33.3%",
      borderBottomColor: "#ecf0f1",
      borderBottomWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
   },
   btnChangePassword: {
      width: "100%",
      height: "33.3%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomColor: "#ecf0f1",
      borderBottomWidth: 1,
   },
   textEditProfile: {
      color: "#636e72",
   },
   btnLogout: {
      width: "100%",
      height: "33.3%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20
   },
   textLogout: {
      color: "#636e72",
      fontWeight: "bold"
   },
   iconEditProfile: {
      marginRight: 10,
      color: "#636e72"
   },
   iconLogout: {
      marginRight: 10,
      color: "#e74c3c"
   },
   Modal: {
      flexDirection: "column",
      justifyContent: "flex-end",
      margin: 0
   },
   formPassword: {
      width: "80%",
      height: 170,
      backgroundColor: "#fff",
      borderRadius: 10,
      alignItems: "center",
      padding: 10
   },
   textW: {
      textAlign: "center",
      fontSize: 14,
      fontWeight: "bold",
      color: "#2d3436"
   },
   titlePass: {
      textAlign: "center"
   },
   inputpass: {
      width: "100%",
      height: 40,
      borderColor: "#b2bec3",
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 10,

   },
   optionBtn: {
      borderTopWidth: 1,
      borderTopColor: "#dfe6e9",
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
   },
   btnCancel: {
      width: 100,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   },
   listProfile: {
      paddingHorizontal: 20,
      marginTop: 10
   }
})

export default stylesProfile