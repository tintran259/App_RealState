import { StyleSheet } from 'react-native'
import { COLOR } from '../../contants'
const stylesFormLogin = StyleSheet.create({
   body: {
      width: "100%",
      height: 350,
      paddingHorizontal: 20,
      marginTop: 20
   },
   Formlogin: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
   },
   icon: {
      width: "8%",
      fontSize: 18,
      color: "#2d3436"
   },
   input: {
      width: "92%",
      borderBottomWidth: 1,
      borderBottomColor: "#2d3436",
      height: 30,
      paddingVertical: 2,
      paddingRight: 50,
      color: "#2d3436"
   },
   iconshowPass: {
      color: "#2d3436",
      fontSize: 17
   },
   iconShowHidePass: {
      position: "absolute",
      right: "1%",
      width: 40,
      height: 40,
      padding: 10,

   },
   btnSignIn: {
      width: "70%",
      height: 40,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#27ae60",
      marginBottom: 15
   },
   btnSignUp: {
      width: "100%",
      height: 40,
      backgroundColor: "#e74c3c",
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15
   },
   or: {
      width: "100%",
      textAlign: "center",
      color: "#fff"
   },
   textBtn: {
      color: "#fff"
   },
   for: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 30,
   },
   forgotPass: {
      width: "45%",
      height: 30,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
   },
   textForgot: {
      fontSize: 14,
      color: "#2980b9"
   },
   sigin: {
      flexDirection: "row",
      justifyContent: "space-around"
   },
   btnFacebook: {
      width: 40,
      height: 40,
      backgroundColor: "#2980b9",
      borderRadius: 10,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   btnGmail: {
      width: 40,
      height: 40,
      backgroundColor: "#e74c3c",
      borderRadius: 10,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   logoFB: {
      fontSize: 25,
      color: "#fff"
   },
   Modal: {
      backgroundColor: "red",
      width: "90%",
      maxHeight: 40,
   },
   textEmpty: {
      position: "absolute",
      right: "2%",
      top: "100%",
      color: "#e74c3c"
   }
})

export default stylesFormLogin