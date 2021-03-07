import { StyleSheet } from 'react-native'

const stylesIndexLogin = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFF"
   },
   header: {
      width: "100%",
      height: "40%",
      alignItems: "center",
      justifyContent: "center",
   },
   titleHeader: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#2d3436",
      letterSpacing: 1,
      marginTop: 20
   },
   bg: {
      position: "absolute",
      width: 400,
      height: 400,
      top: 270,
      opacity: 0.5
   },
   background: {
      width: 100,
      height: 100,
      position: "relative",
      borderBottomLeftRadius: 50,
   }
})

export default stylesIndexLogin