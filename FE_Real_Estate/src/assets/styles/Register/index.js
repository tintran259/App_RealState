import { StyleSheet } from 'react-native'

const StylesRegister = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   vIEWHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   textChange: {
      color: "#3498db",
      marginLeft: 50
   },
   header: {
      width: "100%",
      height: 80,
   },
   iconBack: {
      fontSize: 25,
      color: "#2d3436",
   },
   titleHeader: {
      color: "#2d3436",
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20
   },
   btnBack: {
      width: 60,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
   },
   avatar: {
      width: 80,
      height: 80,
      borderRadius: 15,
      marginLeft: 10
   },
   headerForm: {
      width: "100%",
      height: 80,
      flexDirection: "row",
      alignItems: "center",
   },
   btnCam: {
      position: "absolute",
      right: "18%",
      width: 50,
      height: 40,
      justifyContent: "flex-end",
      alignItems: "center"
   },
   iconCam: {
      fontSize: 23,
      color: "#fff"
   },
   bodyForm: {
      width: "100%",
      padding: 10
   },
   label: {
      color: "#2d3436",
      letterSpacing: 1,
      fontWeight: "bold",
      marginLeft: 10
   },
   input: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      borderBottomWidth: 1,
      borderColor: "#b2bec3",
      paddingHorizontal: 10,
      marginTop: 10,
   },
   inputForm: {
      marginBottom: 20,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: "#ecf0f1"
   },
   footer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
   },
   btnRegister: {
      width: 60,
      height: 40,
      backgroundColor: "#3498db",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10
   },
   textRegister: {
      color: "#FFF",
      fontWeight: "bold",
      letterSpacing: 1
   },
   modal: {
      width: "80%",
      height: 120,
      backgroundColor: "#fff",
      borderRadius: 15,
      alignItems: "center"
   },
   headerModal: {
      width: "100%",
      height: 70,
      alignItems: "center",
      paddingHorizontal: 10,
      borderBottomColor: "#dfe6e9",
      borderBottomWidth: 1
   },
   titleOops: {
      fontSize: 15,
      marginTop: 20,
      fontWeight: "bold",
      color: "#2d3436",
      letterSpacing: 1
   },
   textModal: {
      color: "#636e72",
      marginTop: 10
   },
   btnOk: {
      width: 200,
      height: 45,
      justifyContent: "center",
      alignItems: "center"
   },
   textModalS: {
      color: "#3498db",
      fontWeight: "bold"
   },
   textEmpty: {
      position: "absolute",
      right: "5%",
      bottom: "20%",
      color: "#e74c3c"
   }
})

export { StylesRegister }